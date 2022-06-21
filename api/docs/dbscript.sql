BEGIN;


CREATE TABLE IF NOT EXISTS public."Profile"
(
    id integer NOT NULL DEFAULT nextval('"Profile_id_seq"'::regclass),
    "userId" integer NOT NULL,
    "favoriteMovies" text[] COLLATE pg_catalog."default",
    "watchedMovies" text[] COLLATE pg_catalog."default",
    bio text COLLATE pg_catalog."default",
    "socialLinks" text[] COLLATE pg_catalog."default",
    CONSTRAINT "Profile_pkey" PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
);

CREATE TABLE IF NOT EXISTS public."Review"
(
    id integer NOT NULL DEFAULT nextval('"Review_id_seq"'::regclass),
    "movieId" integer NOT NULL,
    rating integer NOT NULL,
    "createdAt" timestamp(3) without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    comment text COLLATE pg_catalog."default",
    "userId" integer NOT NULL,
    "dislikedBy" integer[],
    "likedBy" integer[],
    CONSTRAINT "Review_pkey" PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
);

CREATE TABLE IF NOT EXISTS public."ReviewComment"
(
    id integer NOT NULL DEFAULT nextval('"ReviewComment_id_seq"'::regclass),
    "reviewId" integer NOT NULL,
    "authorId" integer NOT NULL,
    comment text COLLATE pg_catalog."default" NOT NULL,
    "createdAt" timestamp(3) without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    CONSTRAINT "ReviewComment_pkey" PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
);

CREATE TABLE IF NOT EXISTS public."User"
(
    id integer NOT NULL DEFAULT nextval('"User_id_seq"'::regclass),
    "userName" text COLLATE pg_catalog."default" NOT NULL,
    email text COLLATE pg_catalog."default" NOT NULL,
    password text COLLATE pg_catalog."default" NOT NULL,
    role "Role" NOT NULL DEFAULT 'USER'::"Role",
    "createdAt" timestamp(3) without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    CONSTRAINT "User_pkey" PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
);

CREATE TABLE IF NOT EXISTS public."WatchList"
(
    id integer NOT NULL DEFAULT nextval('"WatchList_id_seq"'::regclass),
    "userId" integer NOT NULL,
    "createdAt" timestamp(3) without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "movieId" text[] COLLATE pg_catalog."default",
    CONSTRAINT "WatchList_pkey" PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
);

CREATE TABLE IF NOT EXISTS public._prisma_migrations
(
    id character varying(36) COLLATE pg_catalog."default" NOT NULL,
    checksum character varying(64) COLLATE pg_catalog."default" NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    logs text COLLATE pg_catalog."default",
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone NOT NULL DEFAULT now(),
    applied_steps_count integer NOT NULL DEFAULT 0,
    CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
);

ALTER TABLE IF EXISTS public."Profile"
    ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId")
    REFERENCES public."User" (id) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE RESTRICT;
CREATE INDEX IF NOT EXISTS "Profile_userId_key"
    ON public."Profile"("userId");


ALTER TABLE IF EXISTS public."Review"
    ADD CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId")
    REFERENCES public."User" (id) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE RESTRICT;


ALTER TABLE IF EXISTS public."ReviewComment"
    ADD CONSTRAINT "ReviewComment_authorId_fkey" FOREIGN KEY ("authorId")
    REFERENCES public."User" (id) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE RESTRICT;


ALTER TABLE IF EXISTS public."ReviewComment"
    ADD CONSTRAINT "ReviewComment_reviewId_fkey" FOREIGN KEY ("reviewId")
    REFERENCES public."Review" (id) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE RESTRICT;


ALTER TABLE IF EXISTS public."WatchList"
    ADD CONSTRAINT "WatchList_userId_fkey" FOREIGN KEY ("userId")
    REFERENCES public."User" (id) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE RESTRICT;
CREATE INDEX IF NOT EXISTS "WatchList_userId_key"
    ON public."WatchList"("userId");

END;
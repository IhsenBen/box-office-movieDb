/*
  Warnings:

  - The `socialLinks` column on the `Profile` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Profile" ALTER COLUMN "bio" DROP NOT NULL,
DROP COLUMN "socialLinks",
ADD COLUMN     "socialLinks" TEXT[];

-- AlterTable
ALTER TABLE "Review" ADD COLUMN     "dislikedBy" TEXT[],
ADD COLUMN     "likedBy" TEXT[],
ALTER COLUMN "comment" DROP NOT NULL;

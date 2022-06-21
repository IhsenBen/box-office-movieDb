/*
  Warnings:

  - The `dislikedBy` column on the `Review` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `likedBy` column on the `Review` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `movieId` column on the `WatchList` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Review" DROP COLUMN "dislikedBy",
ADD COLUMN     "dislikedBy" INTEGER[],
DROP COLUMN "likedBy",
ADD COLUMN     "likedBy" INTEGER[];

-- AlterTable
ALTER TABLE "WatchList" DROP COLUMN "movieId",
ADD COLUMN     "movieId" INTEGER[];

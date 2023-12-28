/*
  Warnings:

  - You are about to drop the column `Comment` on the `Assurance` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Assurance` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `Assurance` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Assurance_personId_key";

-- AlterTable
ALTER TABLE "Assurance" DROP COLUMN "Comment",
DROP COLUMN "userId",
DROP COLUMN "username",
ADD COLUMN     "Comments" TEXT;

/*
  Warnings:

  - You are about to drop the column `Comments` on the `Assurance` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Assurance" DROP COLUMN "Comments",
ADD COLUMN     "comments" TEXT,
ALTER COLUMN "createAt" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Person" ALTER COLUMN "createAt" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "createAt" SET DEFAULT CURRENT_TIMESTAMP;

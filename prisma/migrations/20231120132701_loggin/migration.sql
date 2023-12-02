/*
  Warnings:

  - Added the required column `createAt` to the `Person` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Person` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Person` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `Person` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Person" ADD COLUMN     "createAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD COLUMN     "username" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "createAt" TIMESTAMP(3),
ADD COLUMN     "updatedAt" TIMESTAMP(3),
ADD COLUMN     "userId" INTEGER,
ADD COLUMN     "username" TEXT;

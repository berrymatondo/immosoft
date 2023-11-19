/*
  Warnings:

  - You are about to drop the column `mobile` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `personId` on the `User` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('ACTIVE', 'INACTIVE');

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_personId_fkey";

-- DropIndex
DROP INDEX "User_personId_key";

-- AlterTable
ALTER TABLE "Person" DROP COLUMN "mobile";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "personId",
ADD COLUMN     "name" TEXT,
ADD COLUMN     "status" "UserStatus" NOT NULL DEFAULT 'INACTIVE';

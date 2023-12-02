/*
  Warnings:

  - Added the required column `marital` to the `Person` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "MaritalStatus" AS ENUM ('M', 'C');

-- AlterTable
ALTER TABLE "Person" ADD COLUMN     "marital" "MaritalStatus" NOT NULL;

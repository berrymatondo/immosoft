/*
  Warnings:

  - Added the required column `maritalStatus` to the `Immo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Immo" ADD COLUMN     "maritalStatus" "MaritalStatus" NOT NULL;

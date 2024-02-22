/*
  Warnings:

  - Made the column `demAccepetd` on table `Immo` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Immo" ALTER COLUMN "demAccepetd" SET NOT NULL;

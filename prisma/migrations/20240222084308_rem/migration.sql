/*
  Warnings:

  - You are about to drop the column `demAmount` on the `Immo` table. All the data in the column will be lost.
  - You are about to drop the column `duree` on the `Immo` table. All the data in the column will be lost.
  - You are about to drop the column `mensualite` on the `Immo` table. All the data in the column will be lost.
  - You are about to drop the column `taux` on the `Immo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Immo" DROP COLUMN "demAmount",
DROP COLUMN "duree",
DROP COLUMN "mensualite",
DROP COLUMN "taux";

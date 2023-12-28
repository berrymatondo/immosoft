/*
  Warnings:

  - You are about to drop the column `reference` on the `Immo` table. All the data in the column will be lost.
  - Added the required column `autPrt` to the `Immo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `autPrtCo` to the `Immo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `autRev` to the `Immo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `autRevCo` to the `Immo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `chqRep` to the `Immo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `chqRepCo` to the `Immo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prtTmp` to the `Immo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prtTmpCo` to the `Immo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `salNet` to the `Immo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `salNetCo` to the `Immo` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Solde" DROP CONSTRAINT "Solde_immoId_fkey";

-- AlterTable
ALTER TABLE "Immo" DROP COLUMN "reference",
ADD COLUMN     "autPrt" DECIMAL(10,2) NOT NULL,
ADD COLUMN     "autPrtCo" DECIMAL(10,2) NOT NULL,
ADD COLUMN     "autRev" DECIMAL(10,2) NOT NULL,
ADD COLUMN     "autRevCo" DECIMAL(10,2) NOT NULL,
ADD COLUMN     "chqRep" DECIMAL(10,2) NOT NULL,
ADD COLUMN     "chqRepCo" DECIMAL(10,2) NOT NULL,
ADD COLUMN     "prtTmp" DECIMAL(10,2) NOT NULL,
ADD COLUMN     "prtTmpCo" DECIMAL(10,2) NOT NULL,
ADD COLUMN     "salNet" DECIMAL(10,2) NOT NULL,
ADD COLUMN     "salNetCo" DECIMAL(10,2) NOT NULL;

/*
  Warnings:

  - You are about to drop the column `endData` on the `Immo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Immo" DROP COLUMN "endData",
ADD COLUMN     "endDate" TIMESTAMP(3);

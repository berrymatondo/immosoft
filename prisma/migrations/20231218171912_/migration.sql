/*
  Warnings:

  - A unique constraint covering the columns `[personId]` on the table `Rgpd` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Rgpd_personId_key" ON "Rgpd"("personId");

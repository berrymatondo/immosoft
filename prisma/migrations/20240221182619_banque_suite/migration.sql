-- AlterTable
ALTER TABLE "Immo" ADD COLUMN     "bankName" TEXT,
ADD COLUMN     "demAccepetd" BOOLEAN DEFAULT false,
ADD COLUMN     "demAmount" DECIMAL(10,2),
ADD COLUMN     "duree" INTEGER,
ADD COLUMN     "mensualite" INTEGER,
ADD COLUMN     "taux" DECIMAL(10,2);

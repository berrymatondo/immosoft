-- CreateEnum
CREATE TYPE "catagoryTyp" AS ENUM ('E', 'S');

-- CreateEnum
CREATE TYPE "ImmoStatus" AS ENUM ('DEC', 'RBI', 'CLO', 'ARV', 'NEW');

-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_assuId_fkey";

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "immoId" INTEGER,
ALTER COLUMN "assuId" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Solde" (
    "id" SERIAL NOT NULL,
    "denom" TEXT NOT NULL,
    "category" "catagoryTyp" NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "immoId" INTEGER NOT NULL,

    CONSTRAINT "Solde_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Immo" (
    "id" SERIAL NOT NULL,
    "reference" TEXT NOT NULL,
    "anaDone" BOOLEAN NOT NULL DEFAULT false,
    "cachierCharge" TEXT,
    "debutClause" TIMESTAMP(3),
    "demandeCours" TEXT,
    "endData" TIMESTAMP(3),
    "fileClosed" BOOLEAN NOT NULL DEFAULT false,
    "notes" TEXT,
    "offerAccepted" BOOLEAN NOT NULL DEFAULT false,
    "offerDone" BOOLEAN NOT NULL DEFAULT false,
    "rechercheBien" TEXT,
    "startDate" TIMESTAMP(3),
    "immoStatus" "ImmoStatus" NOT NULL DEFAULT 'NEW',
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER,
    "username" TEXT,
    "personId" INTEGER NOT NULL,

    CONSTRAINT "Immo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_assuId_fkey" FOREIGN KEY ("assuId") REFERENCES "Assurance"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_immoId_fkey" FOREIGN KEY ("immoId") REFERENCES "Immo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Solde" ADD CONSTRAINT "Solde_immoId_fkey" FOREIGN KEY ("immoId") REFERENCES "Immo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Immo" ADD CONSTRAINT "Immo_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

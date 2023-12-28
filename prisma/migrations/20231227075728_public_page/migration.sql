-- AlterTable
ALTER TABLE "Person" ADD COLUMN     "origin" TEXT;

-- CreateTable
CREATE TABLE "Parameter" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "visible" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Parameter_pkey" PRIMARY KEY ("id")
);

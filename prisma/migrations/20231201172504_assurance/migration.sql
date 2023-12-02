-- CreateEnum
CREATE TYPE "AssuType" AS ENUM ('AXA', 'DELA', 'AUTRE');

-- CreateEnum
CREATE TYPE "AssuStatus" AS ENUM ('OFA', 'OAC', 'DV1', 'PCD');

-- CreateTable
CREATE TABLE "Assurance" (
    "id" SERIAL NOT NULL,
    "Comment" TEXT,
    "status" "AssuStatus" NOT NULL,
    "type" "AssuType" NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER,
    "username" TEXT NOT NULL,
    "personId" INTEGER NOT NULL,

    CONSTRAINT "Assurance_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Assurance_personId_key" ON "Assurance"("personId");

-- AddForeignKey
ALTER TABLE "Assurance" ADD CONSTRAINT "Assurance_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

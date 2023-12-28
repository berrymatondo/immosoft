-- CreateEnum
CREATE TYPE "ProductType" AS ENUM ('IMMO', 'ASSU');

-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "description" TEXT,
    "done" BOOLEAN NOT NULL DEFAULT false,
    "type" "ProductType" NOT NULL,
    "personId" INTEGER NOT NULL,
    "assuId" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER,
    "username" TEXT,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_assuId_fkey" FOREIGN KEY ("assuId") REFERENCES "Assurance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

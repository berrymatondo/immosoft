-- CreateTable
CREATE TABLE "Rgpd" (
    "id" SERIAL NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "personId" INTEGER NOT NULL,
    "signed" BOOLEAN NOT NULL DEFAULT false,
    "checksum" INTEGER NOT NULL,

    CONSTRAINT "Rgpd_pkey" PRIMARY KEY ("id")
);

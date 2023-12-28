-- AlterTable
ALTER TABLE "Parameter" ADD COLUMN     "origin" TEXT,
ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "visible" DROP NOT NULL;

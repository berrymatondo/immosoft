-- CreateEnum
CREATE TYPE "Banques" AS ENUM ('DEMETRIS', 'ALIANZ', 'CREAFIN', 'PV', 'AUTRE');

-- AlterTable
ALTER TABLE "Immo" ADD COLUMN     "banque" "Banques";

-- DropEnum
DROP TYPE "BanquesList";

-- DropEnum
DROP TYPE "Toto";

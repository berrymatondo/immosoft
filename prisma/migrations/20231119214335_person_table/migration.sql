/*
  Warnings:

  - Added the required column `gender` to the `Person` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('Homme', 'Femme');

-- AlterTable
ALTER TABLE "Person" ADD COLUMN     "address" TEXT,
ADD COLUMN     "bithday" TIMESTAMP(3),
ADD COLUMN     "gender" "Gender" NOT NULL,
ADD COLUMN     "mobile" TEXT,
ADD COLUMN     "notes" TEXT,
ALTER COLUMN "firstname" DROP NOT NULL,
ALTER COLUMN "email" DROP NOT NULL;

/*
  Warnings:

  - You are about to drop the column `bithday` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `marital` on the `Person` table. All the data in the column will be lost.
  - Added the required column `maritalstatus` to the `Person` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Person" DROP COLUMN "bithday",
DROP COLUMN "marital",
ADD COLUMN     "birthday" TIMESTAMP(3),
ADD COLUMN     "maritalstatus" "MaritalStatus" NOT NULL;

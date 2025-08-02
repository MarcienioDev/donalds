/*
  Warnings:

  - You are about to drop the column `CreatedAt` on the `MenuCategory` table. All the data in the column will be lost.
  - You are about to drop the column `UpdatedAt` on the `MenuCategory` table. All the data in the column will be lost.
  - You are about to drop the column `CreatedAt` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `UpdatedAt` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `CreatedAt` on the `Restaurant` table. All the data in the column will be lost.
  - You are about to drop the column `UpdatedAt` on the `Restaurant` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `MenuCategory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Restaurant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."MenuCategory" DROP COLUMN "CreatedAt",
DROP COLUMN "UpdatedAt",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "public"."Product" DROP COLUMN "CreatedAt",
DROP COLUMN "UpdatedAt",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "public"."Restaurant" DROP COLUMN "CreatedAt",
DROP COLUMN "UpdatedAt",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

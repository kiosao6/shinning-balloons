/*
  Warnings:

  - Added the required column `shippingMethod` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "shippingMethod" AS ENUM ('free', 'express');

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "shippingMethod" "shippingMethod" NOT NULL;

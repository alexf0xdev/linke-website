/*
  Warnings:

  - A unique constraint covering the columns `[link]` on the table `Page` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `link` to the `Page` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Page_name_key";

-- AlterTable
ALTER TABLE "Page" ADD COLUMN     "link" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Page_link_key" ON "Page"("link");

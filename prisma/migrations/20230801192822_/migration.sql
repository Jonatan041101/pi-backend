/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Race` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Temper` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Race_name_key" ON "Race"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Temper_name_key" ON "Temper"("name");

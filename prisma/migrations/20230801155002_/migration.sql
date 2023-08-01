-- CreateTable
CREATE TABLE "Race" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "weight" TEXT NOT NULL,
    "heigth" TEXT NOT NULL,
    "yearsOfLife" INTEGER NOT NULL,

    CONSTRAINT "Race_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RaceTemper" (
    "id" TEXT NOT NULL,
    "raceId" TEXT NOT NULL,
    "temperId" TEXT NOT NULL,

    CONSTRAINT "RaceTemper_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Temper" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Temper_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RaceTemper" ADD CONSTRAINT "RaceTemper_raceId_fkey" FOREIGN KEY ("raceId") REFERENCES "Race"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RaceTemper" ADD CONSTRAINT "RaceTemper_temperId_fkey" FOREIGN KEY ("temperId") REFERENCES "Temper"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

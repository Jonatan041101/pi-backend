import { Temper } from '@prisma/client';
import { prisma } from '../database/db';
import { RaceTemperResponse, RaceTemperType } from '../types/types';
import { createTemper, searchTemper } from './temperament.service';
export const createRaceWithTemper = async (
  race: RaceTemperType,
  temperaments: Temper[],
) => {
  try {
    const raceCreated = await prisma.race.create({
      data: {
        heigth: race.heigth,
        image: race.image,
        name: race.name,
        weight: race.weight,
        yearsOfLife: race.yearsOfLife,
        temperRace: {
          createMany: {
            data: temperaments.map((temperament) => ({
              temperId: temperament.id,
            })),
          },
        },
      },
      include: {
        temperRace: {
          include: {
            temper: true,
          },
        },
      },
    });
    return raceCreated;
  } catch (error) {
    console.log(error);
  }
};
export const getRaceWithTemper = async (name?: string) => {
  try {
    const races = await prisma.race.findMany({
      where: name
        ? {
            name: {
              contains: name,
            },
          }
        : {},
      include: {
        temperRace: {
          select: {
            id: true,
            temper: true,
          },
        },
      },
      skip: 0,
      take: 9,
    });
    return races;
  } catch (error) {
    console.log({ error });
  }
};
export const getRaceId = async (id: string) => {
  try {
    const dog = await prisma.race.findUnique({
      where: {
        id,
      },
      include: {
        temperRace: {
          select: {
            id: true,
            temper: true,
          },
        },
      },
    });
    return dog;
  } catch (error) {
    console.log({ error });
  }
};
export const createDogService = async (race: RaceTemperType) => {
  try {
    const temperamentAll: string[] = [];
    for (let temper of race.nameTemper) {
      const temperament = await searchTemper(temper);
      if (!temperament) {
        const newTemperament = await createTemper(temper);
        if (newTemperament) temperamentAll.push(newTemperament?.id);
      } else {
        temperamentAll.push(temperament.id);
      }
    }
    const raceCreated = await prisma.race.create({
      data: {
        heigth: race.heigth,
        image: race.image,
        weight: race.weight,
        name: race.name,
        yearsOfLife: race.yearsOfLife,
        temperRace: {
          createMany: {
            data: temperamentAll.map((temperament) => ({
              temperId: temperament,
            })),
          },
        },
      },
      include: {
        temperRace: {
          include: {
            temper: true,
          },
        },
      },
    });
    return raceCreated;
  } catch (error) {
    console.log({ error });
  }
};

import axios from 'axios';
import { prisma } from './database/db';
import { Race, Temper } from '@prisma/client';
import { orderByString } from './util/order';
import { deleteDuplicate } from './util/deleteDuplicate';
import { Breed } from './types/dogs';
import {
  fetchConvertRace,
  fetchConvertTemper,
} from './util/converter/fetchToDog';
import { createTemper, searchTemper } from './service/temperament.service';
import { createRaceWithTemper } from './service/race.service';
import { NameTemper, RaceTemperType } from './types/types';

export const getBreedsApi = async () => {
  const { data } = await axios.get('https://api.thedogapi.com/v1/breeds');
  const breeds: Breed[] = data as Breed[];
  return breeds;
};
export const initialCreateRaces = async () => {
  try {
    const breeds = await getBreedsApi();
    // Temperament para crear en la DB
    const races: RaceTemperType[] = fetchConvertRace(breeds);

    for (let race of races) {
      const tempers = race.nameTemper.map((name) => name.trim());
      const temperaments = await prisma.temper.findMany({
        where: {
          name: {
            in: tempers,
          },
        },
      });
      await createRaceWithTemper(race, temperaments);
    }
  } catch (error) {
    console.log(error);
  }
};

export const initialCreateTemperaments = async () => {
  const breeds = await getBreedsApi();

  const temperament: NameTemper[] = [];
  const uniqueTemperament: string[] = [];
  const temperStr: string[] = fetchConvertTemper(breeds);

  deleteDuplicate<string>(temperStr, uniqueTemperament);

  orderByString(uniqueTemperament);

  uniqueTemperament.forEach((name) => {
    const newNameTemper = { name: name.trim() };
    temperament.push(newNameTemper);
  });
  console.log({ temperament });

  for (let temper of temperament) {
    console.log({ temper });

    const existTemper = await searchTemper(temper.name);
    if (!existTemper && temper.name.trim().length > 4) {
      await createTemper(temper.name);
    }
  }
};

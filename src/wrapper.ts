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

export const getRaces = async () => {
  const { data } = await axios.get('https://api.thedogapi.com/v1/breeds');
  const breeds: Breed[] = data as Breed[];
  // Temperament para crear en la db
  const temperament: Pick<Temper, 'name'>[] = [];
  const uniqueTemperament: string[] = [];
  const temperStr: string[] = fetchConvertTemper(breeds);

  deleteDuplicate<string>(temperStr, uniqueTemperament);

  orderByString(uniqueTemperament);

  uniqueTemperament.forEach((name) => {
    const newNameTemper = { name: name.trim() };
    temperament.push(newNameTemper);
  });
  const races: Omit<Race, 'id'>[] = fetchConvertRace(breeds);
};

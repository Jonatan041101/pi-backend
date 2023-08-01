import { Race } from '@prisma/client';
import { Breed } from '../../types/dogs';
import { parseWeight } from '../parse/parseNumberTheString';
import { RaceTemperType } from '../../types/types';

export const fetchConvertRace = (breeds: Breed[]) => {
  const races: RaceTemperType[] = breeds.map((race) => ({
    heigth: `${parseWeight(race.height.metric)}`,
    weight: `${parseWeight(race.weight.metric)}`,
    image: race.image.url,
    name: race.name.toLowerCase(),
    yearsOfLife: `${parseWeight(race.life_span)}`,
    nameTemper: race.temperament?.toLowerCase().split(',') || [],
  }));
  return races;
};
export const fetchConvertTemper = (breeds: Breed[]) => {
  const temperStr: string[] = [];
  breeds.forEach((temper) => {
    const temperAll = temper.temperament?.toLowerCase()?.split(',');
    if (temperAll) {
      temperStr.push(...temperAll);
    }
  });
  return temperStr;
};

// Obtener los números de cada cadena
//  const parsedWeights = weights.map(weight => parseWeight(weight));

import { Race } from '@prisma/client';
import { Breed } from '../../types/dogs';

export const fetchConvertRace = (breeds: Breed[]) => {
  const races: Omit<Race, 'id'>[] = breeds.map((race) => ({
    heigth: `${race.height.metric} cm`,
    weight: `${race.weight.metric} kg`,
    image: race.image.url,
    name: race.name.toLowerCase(),
    yearsOfLife: race.life_span.replace('years', 'años'),
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

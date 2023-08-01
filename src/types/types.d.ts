import { Race, Temper } from '@prisma/client';

export type NameTemper = Pick<Temper, 'name'>;
export type RaceTemperType = Omit<Race, 'id'> & {
  nameTemper: string[];
};
export interface ContentTemperRace {
  id: string;
  temper: Temper;
}

export interface TemperRace {
  temperRace: ContentTemperRace[];
}
export interface RaceTemperResponse extends Race, TemperRace {}

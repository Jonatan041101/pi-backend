import { RaceTemperResponse } from '../../types/types';

export const verifyArrayRacesAll = (races: RaceTemperResponse[]) => {
  races.forEach((race) => {
    expect(race).toHaveProperty('id');
    expect(race).toHaveProperty('name');
    expect(race).toHaveProperty('weight');
    expect(race).toHaveProperty('heigth');
    expect(race).toHaveProperty('yearsOfLife');
    expect(race).toHaveProperty('image');
    expect(race).toHaveProperty('temperRace');

    // Verificar dentro de temperRace
    race.temperRace.forEach((temper) => {
      expect(temper).toHaveProperty('id');
      expect(temper).toHaveProperty('temper');
      expect(temper.temper).toHaveProperty('id');
      expect(temper.temper).toHaveProperty('name');
    });
  });
};

import { api } from '../util/super_test';
import { RaceTemperResponse } from '../types/types';

describe('Probando endpoint /race', () => {
  test('GET /race deberia devolver un array de tipo RaceTemperResponse[] con un status de 200', async () => {
    const response = await api.get('/race');

    expect(response.body).toBeInstanceOf(Array);

    expect(response.status).toBe(200);

    const races: RaceTemperResponse[] = response.body;

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
  });
});

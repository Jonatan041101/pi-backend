import { api } from '../util/super_test';
import { RaceTemperResponse } from '../types/types';
import { verifyArrayRacesAll } from './helpers/verifyRaces';
import { GORDON, NON_RESPONSE, RESPONSE } from './helpers/text_test';

describe('Probando endpoint /race', () => {
  test('GET /race deberia devolver un array de tipo RaceTemperResponse[] con un status de 200', async () => {
    const response = await api.get('/race');

    expect(response.body).toBeInstanceOf(Array);

    expect(response.status).toBe(200);

    const races: RaceTemperResponse[] = response.body;

    verifyArrayRacesAll(races);
  });
  test(`GET /race?name=${GORDON}`, async () => {
    const response = await api.get(`/race?name=${GORDON}`);

    expect(response.body).toBeInstanceOf(Array);
    expect(response.body).not.toHaveLength(0);
    expect(response.status).toBe(200);

    const races: RaceTemperResponse[] = response.body;
    verifyArrayRacesAll(races);

    expect(races.every(({ name }) => name.includes(GORDON))).toBe(true);
  });
  test(`GET /race?name=${NON_RESPONSE} si ningun dato responde ${RESPONSE}`, async () => {
    const response = await api.get(`/race?name=${NON_RESPONSE}`);
    expect(response.body).toEqual({ message: RESPONSE });
    expect(response.status).toBe(404);
  });
  test(`GET /race/:id`, async () => {
    const ID = '0006958a-224e-4b94-b393-a76897f5868f';
    const response = await api.get(`/race/${ID}`);
    const race: RaceTemperResponse = response.body;
    expect(response.status).toBe(200);
    expect(race).toHaveProperty('id');
    expect(race).toHaveProperty('name');
    expect(race).toHaveProperty('weight');
    expect(race).toHaveProperty('heigth');
    expect(race).toHaveProperty('yearsOfLife');
    expect(race).toHaveProperty('image');
    expect(race).toHaveProperty('temperRace');
    expect(race.temperRace).toBeInstanceOf(Array);
    race.temperRace.forEach((temper) => {
      expect(temper).toHaveProperty('id');
      expect(temper).toHaveProperty('temper');
      expect(temper.temper).toHaveProperty('id');
      expect(temper.temper).toHaveProperty('name');
    });
  });
  test(`GET /race/:id not found`, async () => {
    const ID = 'Este id no existe';
    const response = await api.get(`/race/${ID}`);
    expect(response.status).toBe(404);
    expect(response.body).toEqual({
      message: `El id ${ID} de la raza no existe`,
    });
  });
});

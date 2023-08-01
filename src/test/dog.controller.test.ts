import { Race } from '@prisma/client';
import { api } from '../util/super_test';

describe('Probando endpoint /dog', () => {
  test('GET /dog deberia devolver un array de tipo Race[]', async () => {
    const response = await api.get('/dog');

    expect(response.body).toBeInstanceOf(Array);

    expect(response.status).toBe(200);

    const races: Race[] = response.body;

    races.forEach((race) => {
      expect(race).toHaveProperty('id');
      expect(race).toHaveProperty('name');
      expect(race).toHaveProperty('weight');
      expect(race).toHaveProperty('heigth');
      expect(race).toHaveProperty('yearsOfLife');
    });
  });
});

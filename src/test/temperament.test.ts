import { Temper } from '@prisma/client';
import { api } from '../util/super_test';
import { isString } from '../util/validates/z';

describe('Obtener todos los temperamentos de las razas', () => {
  test('GET /temperament traer todos los temperamentos', async () => {
    const response = await api.get('/temperament');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    const temperaments: Temper[] = response.body;
    temperaments.forEach((temper) => {
      expect(temper).toHaveProperty('id');
      expect(temper).toHaveProperty('name');
      // expect(isString.parse(temper.id)).toBe(true);
      // expect(isString.parse(temper.name)).toBe(true);
    });
  });
});

import request from 'supertest';
import app from '../server/app';

describe('Carga dinámica de rutas', () => {
  test('Cargar todas las rutas correctamente', async () => {
    const response = await request(app).get('/dog');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello Dog');
  });
});

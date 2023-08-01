import fs from 'node:fs';
import { createRouteContext } from '../test/helpers/contextRoutes';
import { createRoutes } from '.';
import { api } from '../util/super_test';

const PATH_ROUTER = `${__dirname}/ruta1.ts`;

beforeAll(() => {
  fs.writeFileSync(PATH_ROUTER, createRouteContext);
});

describe('Carga dinámica de rutas', () => {
  test('Cargar todas las rutas correctamente', async () => {
    // Ahora el archivo ya debería estar creado antes de que se realicen los tests.
    createRoutes();
    const response = await api.get('/ruta1');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Ruta ruta1');
  });
});
afterAll(() => {
  fs.unlinkSync(PATH_ROUTER);
});

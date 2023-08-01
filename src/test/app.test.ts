import serverStart from '../server/server';
import { api } from '../util/super_test'; // Importa tu aplicación Express (app) que contiene la inicialización del servidor

describe('Inicialización del servidor', () => {
  test('debería iniciar el servidor y responder con un mensaje de bienvenida', async () => {
    // No iniciamos el servidor aquí, solo obtenemos una instancia del "app"
    // y realizamos la prueba en el app en lugar de usar "app.listen"

    const server = serverStart(5005);
    const response = await api.get('/');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      message: 'Bienvenido a Api Dog',
    });

    // Luego, detenemos el servidor (importante hacerlo después de cada prueba)
    server.close();
  });
});

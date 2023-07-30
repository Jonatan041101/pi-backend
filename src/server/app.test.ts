import request from 'supertest';
import app from './app'; // Importa tu aplicación Express (app) que contiene la inicialización del servidor
import serverStart from './server';

describe('Inicialización del servidor', () => {
 it('debería iniciar el servidor y responder con un mensaje de bienvenida', async () => {
  // No iniciamos el servidor aquí, solo obtenemos una instancia del "app"
  // y realizamos la prueba en el app en lugar de usar "app.listen"
  
  const server = serverStart(5005);
  const response = await request(app).get('/');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      message: 'Bienvenido a Api Dog',
    });

    // Luego, detenemos el servidor (importante hacerlo después de cada prueba)
    server.close();
  });
});

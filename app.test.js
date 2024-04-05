const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  test('Debería responder con un mensaje "¡Hola, mundo!"', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('¡Hola, mundo!');
  });
});

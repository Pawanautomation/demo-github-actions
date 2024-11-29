const request = require('supertest');
const app = require('../server');

describe('GET /hello', () => {
  it('should return hello message', async () => {
    const response = await request(app).get('/hello');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Hello GitHub Actions !');
  });
});
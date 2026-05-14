const supertest = require('supertest');
const server = require('../app');
const request = supertest(server);

describe('Node App', () => {
  afterAll(() => {
    server.close();
});

  test('GET / returns 200 with HTML', async () => {
    const res = await request.get('/');
    expect(res.status).toBe(200);
    expect(res.text).toContain('Node App Deployed Successfully');
  });

  test('GET /health returns 200 with JSON status ok', async () => {
    const res = await request.get('/health');
    expect(res.status).toBe(200);
    expect(JSON.parse(res.text)).toEqual({ status: 'ok' });
  });
});

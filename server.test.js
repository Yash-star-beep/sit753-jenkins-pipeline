const request = require('supertest');
const app = require('./server');

describe('GET /', () => {
    it('should return a success message', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.body.status).toEqual('success');
    });
});

describe('GET /health', () => {
    it('should return a healthy status', async () => {
        const res = await request(app).get('/health');
        expect(res.statusCode).toEqual(200);
        expect(res.body.status).toEqual('healthy');
    });
});
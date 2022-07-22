import app from '../infra/express';
import supertest from 'supertest';

/**
 * ==users==
 * POST /sign-un
 * POST /sign-in
 */

/**
 * ==tests==
 * POST /tests
 * GET /tests/disciplines/:disciplineName
 * GET /tests/teachers/:teacherName 
 */

describe('POST /sign-up', () => {
    it('sign up request should return 201', async () => {
        const body = { email: 'teste@email.com', password: '123', confirmPassword: '123' };
        const { status } = await supertest(app).post('/sign-up').send(body);
        expect(status).toEqual(201);
    })
});

describe('POST /sign-in', () => {
    it('sign in request should return 200', async () => {
        const body = { email: 'teste@email.com', password: '123' };
        const { status } = await supertest(app).post('/sign-in').send(body);
        expect(status).toEqual(200);
    })
});

describe('POST /tests', () => {
    it('set test request should return 201', async () => {
        const body = {
            name: 'test-name',
            pdfUrl: 'http://pdf-test-url.com',
            categoryId: 1,
            teacherDisciplineId: 1
        }
        const authorization = 'eyJhbGciOiJIUzI1NiJ9.MQ.V7_ezA-srSupU8atmRPDgBOmocIeL80VCIeSusRHkd4';
        const { status } = await supertest(app).post('/tests').send(body).set("authorization", `Bearer ${authorization}`);
        expect(status).toEqual(201);
    })
});
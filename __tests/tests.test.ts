import app from '../infra/express';
import supertest from 'supertest';

/**
 * ==tests==
 * POST /tests
 * GET /tests/disciplines/:disciplineName
 * GET /tests/teachers/:teacherName 
 */

interface data {
    name: string,
    teachersDiscipline: { discipline: { name: string }, teacher: { name: string } },
    category: { name: string }
}

const authorization = 'Bearer eyJhbGciOiJIUzI1NiJ9.MQ.V7_ezA-srSupU8atmRPDgBOmocIeL80VCIeSusRHkd4';

describe('POST /tests', () => {
    it('set test request should return 201', async () => {
        const body = {
            name: 'test-name',
            pdfUrl: 'https://github.com/',
            category: 'test_category',
            teacher: 'test_teachers',
            discipline: 'test_discipline'
        }
        const result = await supertest(app).post('/tests').send(body).set("authorization", authorization);
        expect(result.status).toEqual(201);
    });
    it('set test request without token should return 401', async () => {
        const body = {
            name: 'test-name',
            pdfUrl: 'https://github.com/',
            category: 'test_category',
            teacher: 'test_teachers',
            discipline: 'test_discipline'
        }
        const { status } = await supertest(app).post('/tests').send(body);
        expect(status).toEqual(401);
    });
    it('set test request where teacher doesnt teach the discipline should return 400', async () => { //teacher doesn't teach that discipline
        const body = {
            name: 'test-name',
            pdfUrl: 'https://github.com/',
            category: 'test_category',
            teacher: 'test_teachers',
            discipline: 'test_discipline_'
        }
        const { status } = await supertest(app).post('/tests').send(body).set("authorization", authorization);
        expect(status).toEqual(400);
    });
    it('set test request with non-existent category should return 404', async () => { //category not found
        const body = {
            name: 'test-name',
            pdfUrl: 'https://github.com/',
            category: 'test-category',
            teacher: 'test_teachers',
            discipline: 'test_discipline'
        }
        const { status } = await supertest(app).post('/tests').send(body).set("authorization", authorization);
        expect(status).toEqual(404);
    });
    it('set test request with non-existent teacher  should return 404', async () => { //teacher not found
        const body = {
            name: 'test-name',
            pdfUrl: 'https://github.com/',
            category: 'test_category',
            teacher: 'test-teacher',
            discipline: 'test_discipline'
        }
        const { status } = await supertest(app).post('/tests').send(body).set("authorization", authorization);
        expect(status).toEqual(404);
    });
    it('set test request with non-existent discipline should return 404', async () => { //discipline not found
        const body = {
            name: 'test-name',
            pdfUrl: 'https://github.com/',
            category: 'test_category',
            teacher: 'test_teachers',
            discipline: 'test-discipline'
        }
        const { status } = await supertest(app).post('/tests').send(body).set("authorization", authorization);
        expect(status).toEqual(404);
    });
    it('set test request should return 422', async () => {
        const body = {
            name: 'test-name',
            pdfUrl: 'https://github.com/',
            category: 'test_category',
            teacher: 'test_teachers',
            discipline: 'test_discipline',
            additionalInformation: 'cash test'
        }
        const { status } = await supertest(app).post('/tests').send(body).set("authorization", authorization);
        expect(status).toEqual(422);
    });
});

describe('GET /tests/disciplines/disciplineName', () => {
    it('get tests by discipline name should return 200', async () => {
        const { status, body } = await supertest(app).get('/tests/disciplines/test_discipline').set("authorization", authorization);
        expect(status).toEqual(200);
    });
    it('get tests by discipline name shoud return 404', async () => {
        const { status, body } = await supertest(app).get('/tests/disciplines/crash').set("authorization", authorization);
        expect(status).toEqual(404);
    });
});

describe('GET /tests/teachers/teacherName', () => {
    it('get tests by discipline name should return 200', async () => {
        const { status, body } = await supertest(app).get('/tests/teachers/test_teachers').set("authorization", authorization);
        expect(status).toEqual(200);
    });
    it('get tests by discipline name shoud return 404', async () => {
        const { status } = await supertest(app).get('/tests/teachers/crash').set("authorization", authorization);
        expect(status).toEqual(404);
    });
});
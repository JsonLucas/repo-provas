import app from "../infra/express";
import supertest from "supertest";

describe('POST /sign-up', () => {
    it('sign up request should return 201', async () => {
        const body = { email: 'teste_2@email.com', password: '123', confirmPassword: '123' };
        const { status } = await supertest(app).post('/sign-up').send(body);
        expect(status).toEqual(201);
    });
    it('sign up request should return 409', async () => {
        const body = { email: 'teste_2@email.com', password: '123', confirmPassword: '123' };
        const { status } = await supertest(app).post('/sign-up').send(body);
        expect(status).toEqual(409);
    });
    it('sign up request should return 422', async () => {
        const body = { email: 'teste_2@email.com', password: '123', confirmPassword: '123', additionaInformation: 'cash test' };
        const { status } = await supertest(app).post('/sign-up').send(body);
        expect(status).toEqual(422);
    });
});

describe('POST /sign-in', () => {
    it('sign in request should return 200', async () => {
        const body = { email: 'teste@email.com', password: '123' }; //success
        const { status } = await supertest(app).post('/sign-in').send(body);
        expect(status).toEqual(200);
    });
    it('sign in request should return 400', async () => {
        const body = { email: 'teste@email.com', password: '1234' }; //wrong credentials
        const { status } = await supertest(app).post('/sign-in').send(body);
        expect(status).toEqual(400);
    });
    it('sign in request should return 404', async () => {
        const body = { email: 'teste_teste@email.com', password: '123' }; //login not found
        const { status } = await supertest(app).post('/sign-in').send(body);
        expect(status).toEqual(404);
    });
    it('sign in request should return 422', async () => { //bad structure information request
        const body = { email: 'teste@email.com', password: '123', additionalInformation: 'cash test' };
        const { status } = await supertest(app).post('/sign-in').send(body);
        expect(status).toEqual(422);
    });
});
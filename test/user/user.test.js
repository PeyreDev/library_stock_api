const request = require('supertest');
const app = require('../../src/index');

describe('User API', () => {
    // Get user by ID
    describe('GET /api/user/:id', () => {
        it('should return user by ID', async () => {
            const userId = 1;
            const response = await request(app).get(`/api/user/id/${userId}`);

            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('id', userId);
            expect(response.body).toHaveProperty('name', 'test1');
        });

        it('should return 400 if user not found', async () => {
            const userId = 999;
            const response = await request(app).get(`/api/user/id/${userId}`);

            expect(response.status).toBe(400);
            expect(response.body).toHaveProperty('message', 'An error occurred while retrieving the user');
        });
    });

    // Get user by mail
    describe('GET /api/user/mail/:mail', () => {
        it('should return user by mail', async () => {
            const mail = "test1@gmail.com";
            const response = await request(app).get(`/api/user/mail/${mail}`);

            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('mail', mail);
            expect(response.body).toHaveProperty('name', 'test1');
        });

        it('should return 400 if user not found', async () => {
            const mail = "fake@gmail.com";
            const response = await request(app).get(`/api/user/mail/${mail}`);

            expect(response.status).toBe(400);
            expect(response.body).toHaveProperty('message', 'An error occurred while retrieving the user');
        });
    });

    // Create user
    describe('POST /api/user/create', () => {
        it('should create user', async () => {
            const name = 'CreateTest';
            const first_name = 'WithJest';
            const mail = 'createTest@gmail.com';
            const password = 'password123';
            const role_id = 1;

            const response = await request(app).post(`/api/user/create`). send({
                name, first_name, mail, password, role_id
            });

            expect(response.status).toBe(200);
        })
    })
});
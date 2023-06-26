const request = require('supertest');
const app = require('../../index');

describe('User API', () => {
    describe('GET /api/user/:id', () => {
        it('should return user by ID', async () => {
            const userId = 1;
            const response = await request(app).get(`/api/user/${userId}`);

            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('id', userId);
            expect(response.body).toHaveProperty('name', 'test1');
        });

        it('should return 400 if user not found', async () => {
            const userId = 999;
            const response = await request(app).get(`/api/user/${userId}`);

            expect(response.status).toBe(400);
            expect(response.body).toHaveProperty('message', 'Une erreur s\'est produite lors de la récupération de l\'utilisateur.');
        });
  });
});
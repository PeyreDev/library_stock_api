const request = require('supertest');
const app = require('../../../src/index');

describe('Author operation API', () => {
    /*
        in normal use, the create_author route must be called before creating the corresponding operation. 
        In this way we have here access to the ID of the author
    */
    describe('POST /api/operation/author_operation/create', () => {
        it('should create an author_operation for creation of an author', async () => {
            const date = "2022-07-11 15:45:20";
            const comment = "un commentaire de test";
            const userId = 1;
            const authorId = 1;
            const operationTypeId = 5; // == CREATE_AUTHOR

            const response = await request(app).post(`/api/operation/author_operation/create`).send({
                date, comment, userId, authorId, operationTypeId
            });

            expect(response.status).toBe(200);
        });
    });

    describe('POST /api/operation/author_operation/update/:id', () => {
        it('should update an author_operation', async () => {
            const date = "2023-07-11 15:45:20";
            const operationId = 1;
            const comment = "Un commentaire modifié par Jest";

            const response = await request(app).post(`/api/operation/author_operation/update/${operationId}`).send({
                date, comment
            });

            expect(response.status).toBe(200);
        });
    });

    describe('GET /api/operation/author_operation/:id', () => {
        it('should return author_operation by ID', async () => {
            const authorOperationId = 3;
            const response = await request(app).get(`/api/operation/author_operation/id/${authorOperationId}`);
            expect(response.status).toBe(200);
        });
    });
});
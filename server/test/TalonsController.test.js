
const supertest = require('supertest')
const request = supertest('http://localhost:5000');

describe('Talons Controller', () => {
    describe('/talons', () => {
        it('should return error - talons is occupied', async () => {
            await request
                .post('/talons')
                .set('Authorization', "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjF9.UxaG58pVQpCt0Y5uYio20uUXpj7ctNC4zx4ErwGahnA")
                .send({
                    userId: "3",
                    doctorId: "10"
                })
                .expect(400);
        })

        it('should return error - validation', async () => {
            await request
                .post('/talons')
                .set('Authorization', "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjF9.UxaG58pVQpCt0Y5uYio20uUXpj7ctNC4zx4ErwGahnA")
                .send({
                    userId: "4",
                    doctorId: "10"
                })
                .expect(400);
        })
    })
})
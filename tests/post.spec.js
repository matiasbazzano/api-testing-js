const app = require('../src/app');
const request = require('supertest');
const expect = require('chai').expect;

describe('post request', () => {
    it('json response', () => {
        request(app)
            .post('/course')
            .send({ "name": "mati" })
            .set('Accept', 'application/json')
            .end((err, res) => {
                expect(res.body.name).to.be.equal('mati');
        });
    });


    it('form response', () => {
        request(app)
            .post('/course')
            .send('name=mati')
            .set('Accept', 'application/x-www-form-urlencoded')
            .expect(200, { "id": "2", "name": "mati" });
        });
    });
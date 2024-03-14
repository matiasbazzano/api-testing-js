const app = require('../src/app');
const request = require('supertest');
const expect = require('chai').expect;

describe('get request', () => {
    it('get course id', () => {
        request(app)
            .get('/course/1')
            .end((err, res) => {
                expect(res.body.id).to.be.equal('1');
            });
    });

    // localhost/course?name=mocha
    it('get query param name', () => {
        request(app)
        .get('/course')
        .query({ 'name' : 'mocha' })
        .expect(200, { id: '1', name: 'mocha' });
    })
});
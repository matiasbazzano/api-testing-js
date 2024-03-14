const express = require('express');
const request = require('supertest');
const expect = require('chai').expect;

const app = express();

app.get('/first', (err, res) => {
    res.status(200).json({ "ok": "response" })
});

describe('First test', () => {
    it('OK response', () => {
        request(app)
        .get('/first')
        .end((err, res) => {
            expect(res.statusCode).to.be.equal(200);
        });
    });

    it('Mocky OK response', (done) => {
        request('https://run.mocky.io')
        .get('/v3/988e58c9-3310-44f6-9bc5-e2d408bae368')
        .end((err, res) => {
            if (err) return done(err);
            expect(res.statusCode).to.be.equal(200);
            expect(res.body).to.include({ "mati": "qa" });
            done();
        });
      });
    }); 
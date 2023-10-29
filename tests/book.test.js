const request = require('supertest');
const app = require('../server')
const mongoose = require('mongoose');
const bookMessage = "lll"
beforeAll(done=>{
    done();
})

afterAll(done=>{
    // mongoose.Connection.close();
    done();
})

describe("book test",()=>{
    test("add new book",async()=>{
        const tmp = 2
        expect(tmp).toEqual(2)
    })
})

describe("GET /",()=>{
    test("get all book",async()=>{
        const res = await request(app).get('/book');
        expect(res.statusCode).toEqual(200);
    })
})

describe("POST /",()=>{
    test("add a new book",async()=>{
        const res = await request(app).post('/book')
        .send({
            "message": "nnn"
        });
        expect(res.statusCode).toEqual(200);
        expect(res.body.title).toEqual("nnn")
    })
})
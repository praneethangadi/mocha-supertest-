const expect=require('expect');
const request =require('supertest');
const app=require('./app').app;

it('response of get', (done)=>{
     request(app)
     .get('/')
     .expect(200)
     .expect('home')
     
     .end(done);
})
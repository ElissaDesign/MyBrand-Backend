import chai, {expect} from "chai";
import app from "../app.js"
import path  from "path";
import users from "../models/userModel.js";
import posts from "../models/postModel.js";
import message from "../models/messageModel.js";
import request from "chai-http";

process.env.NODE_ENV = 'test'

//Assertion   style

chai.use(request);

describe('posts', () => {
    beforeEach((done) => { //Before each test we empty the database
        users.deleteMany({}, (err) => { 
           done();           
        });        
    });

    

    /*
  * Test the /GET route
  */
  describe('/GET posts', () => {
    it('it should GET all the posts', (done) => {
      chai.request(app)
          .get('/api/posts')
          .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property("post");
            done();
            });
        });
    });


    describe('/PUT /:id posts', () => {
      it('it should UPDATE a post given the id', (done) => {
          let post = new posts({title: "The Games of Narnia", body: "C.S. Lewis"})
          post.save((err, post) => {
                chai.request(app)
                .patch('/api/posts/' + post.id)
                .send({title: "The Chronicles of Narnia", body: "C.S."})
                .end((err, res) => {
                  expect(res).to.have.status(200);
                  expect(res.body).to.be.a('object');
                  // expect(res.body).to.have.property("title");
                  // expect(res.body).to.have.property("body");
                  done();
                });
          });
      });
  });


  describe('DELETE /:id posts', () => {
    it('it should DELETE a post given the id', (done) => {
        let post = new posts({title: "The Chronicles of Narnia", body: "C.S. Lewis"})
        post.save((err, post) => {
              chai.request(app)
              .delete('/api/posts/' + post.id)
              .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.a('object');
                // expect(res.body).to.have.property("title");
                // expect(res.body).to.have.property("body");
                done();
              });
        });
    });
});


});



// Users testing ------------------




describe('users', () => {
    beforeEach((done) => { //Before each test we empty the database
        users.deleteMany({}, (err) => { 
           done();           
        });        
    });

    /*
  * Test the /GET route
  */
  describe('GET users', () => {
    it('it should GET all the Users', (done) => {
      chai.request(app)
          .get('/api/users')
          .end((err, res) => {
                expect(res).to.have.status(200);
                // expect(res.body).to.have.property("name");
            done();
            });
        });
    });


    describe('PUT /:id users', () => {
      it('it should UPDATE a user given the id', (done) => {
          let user = new users({name: "peter", email: "peter@gmail.com", password: "advanced"})
          user.save((err, user) => {
                chai.request(app)
                .patch('/api/users/' + user.id)
                .send({name: "Narnia", email: "narnia@gmail.com", password: "advanced"})
                .end((err, res) => {
                  expect(res).to.have.status(404);
                  expect(res.body).to.be.a('object');
                  // expect(res.body).to.have.property("title");
                  // expect(res.body).to.have.property("body");
                  done();
                });
          });
      });
  });
    describe('PUT /:id users', () => {
      it('it should get error of 404 whilec UPDATING a user given the id', (done) => {
          let user = new users({name: "peter", email: "peter@gmail.com", password: "advanced"})
          user.save((err, user) => {
                chai.request(app)
                .patch('/api/users/' + user.id)
                .send({name: "Narnia", email: "narnia@gmail.com", password: "advanced"})
                .end((err, res) => {
                  expect(res).to.have.status(404);
                  expect(res.body).to.be.a('object');
                  // expect(res.body).to.have.property("title");
                  // expect(res.body).to.have.property("body");
                  done();
                });
          });
      });
  });


  describe('DELETE /:id users', () => {
    it('it should DELETE a user given the id', (done) => {
      let user = new users({name: "peter", email: "peter@gmail.com", password: "advanced"})
        user.save((err, user) => {
              chai.request(app)
              .delete('/id:/api/users/' + user.id)
              .end((err, res) => {
                expect(res).to.have.status(404);
                expect(res.body).to.be.a('object');
                // expect(res.body).to.have.property("title");
                // expect(res.body).to.have.property("body");
                done();
              });
        });
    });
});


});



// =------------------------------


describe('messages', () => {
    beforeEach((done) => { //Before each test we empty the database
        message.deleteMany({}, (err) => { 
           done();           
        });        
    });

    /*
  * Test the /GET route
  */
  describe('GET message', () => {
    it('it should GET all the Messages', (done) => {
      chai.request(app)
          .get('/api/message')
          .end((err, res) => {
                expect(res).to.have.status(404);
                // expect(res.body).to.have.property("name");
            done();
            });
        });
    });


    describe('PUT /:id message', () => {
      it('it should UPDATE a messsage given the id', (done) => {
          let Message = new message({name: "peter", email: "peter@gmail.com", option: "advanced", message: "its a fixed price"})
          Message.save((err, Message) => {
                chai.request(app)
                .patch('/api/message/' + Message.id)
                .send({name: "Narnia", email: "narnia@gmail.com", option: "advanced", message: "its a fixed price"})
                .end((err, res) => {
                  expect(res).to.have.status(404);
                  expect(res.body).to.be.a('object');
                  // expect(res.body).to.have.property("title");
                  // expect(res.body).to.have.property("body");
                  done();
                });
          });
      });
  });
    describe('PUT /:id message', () => {
      it('it should get error of 404 whilec UPDATING a Message given the id', (done) => {
        let Message = new message({name: "peter", email: "peter@gmail.com", option: "advanced", message: "its a fixed price"})
          Message.save((err, Message) => {
                chai.request(app)
                .patch('/api/message/' + Message.id)
                .send({name: "Narnia", email: "narnia@gmail.com", option: "advanced", message: "its a fixed price"})
                .end((err, res) => {
                  expect(res).to.have.status(404);
                  expect(res.body).to.be.a('object');
                  // expect(res.body).to.have.property("title");
                  // expect(res.body).to.have.property("body");
                  done();
                });
          });
      });
  });


  describe('DELETE /:id message', () => {
    it('it should DELETE a user given the id', (done) => {
      let Message = new message({name: "peter", email: "peter@gmail.com", option: "advanced", message: "its a fixed price"})
        Message.save((err, Message) => {
              chai.request(app)
              .delete('/id:/api/message/' + Message.id)
              .end((err, res) => {
                expect(res).to.have.status(404);
                expect(res.body).to.be.a('object');
                // expect(res.body).to.have.property("title");
                // expect(res.body).to.have.property("body");
                done();
              });
        });
    });
});


});

/*
  * Test the /POST route
  */


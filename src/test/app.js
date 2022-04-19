import chai, {expect} from "chai";
import app from "../app.js"
import users from "../models/userModel.js";
import posts from "../models/postModel.js";
import chaiHttp from "chai-http";
import mongoose from "mongoose";

process.env.NODE_ENV = 'test'

//Assertion   style

chai.use(chaiHttp);

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
                // expect(res).to.have.lengthOf();
                expect(res.body).to.have.property("post");
            done();
            });
        });
    });

});


    /**
     * Test the GET route
     */

    
    /**
     * Test the GET  by(id) route
     */

    /**
     * Test the POST route
     */

    /**
     * Test the PATCH by(id) route
     */

    /**
     * Test the DELETE by(id) route
     */

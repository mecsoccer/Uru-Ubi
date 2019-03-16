import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../index';
import inputMocks from '../mocks/inputMocks';
import pool from '../../models/migration';

pool.query('TRUNCATE TABLE inputs RESTART IDENTITY;').catch();

const {
  newInput, updateInput, existingInput1, existingInput2,
} = inputMocks;

chai.use(chaiHttp);

const { expect } = chai;

describe('Test for Input Endpoints', () => {
  before((done) => {
    chai.request(app)
      .post('/api/v1/inputs')
      .send(existingInput1)
      .end();
    chai.request(app)
      .post('/api/v1/inputs')
      .send(existingInput2)
      .end(() => {
        done();
      });
  });

  describe('get requests for inputs', () => {
    it('# should return list of inputs', (done) => {
      chai.request(app)
        .get('/api/v1/inputs')
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('array').that.has.length.greaterThan(0);
          done();
        });
    });

    it('# should return single input', (done) => {
      chai.request(app)
        .get('/api/v1/inputs/1')
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res).to.have.status(200);
          expect(res.body).to.have.property('id').that.equals(1);
          done();
        });
    });

    it('# should return error if request id is not a number', (done) => {
      chai.request(app)
        .get('/api/v1/inputs/one')
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res).to.have.status(400);
          expect(res.body).to.have.property('error').that.is.a('string');
          done();
        });
    });

    it('# should return 404 for non-existent id', (done) => {
      chai.request(app)
        .get('/api/v1/inputs/1000')
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res).to.have.status(404);
          expect(res.body).to.have.property('error').that.is.a('string');
          done();
        });
    });
  });

  describe('Post requests for inputs', () => {
    it('# should add new input', (done) => {
      chai.request(app)
        .post('/api/v1/inputs')
        .send(newInput)
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(201);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('id').that.is.a('number');
          done();
        });
    });

    it('# should not add new input if one with same name and batch already exists', (done) => {
      chai.request(app)
        .post('/api/v1/inputs')
        .send(existingInput1)
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(409);
          expect(res.body).to.be.an('object').that.has.property('error').that.is.a('string');
          done();
        });
    });
  });

  describe('Put requests for inputs', () => {
    it('# should update already existing input', (done) => {
      chai.request(app)
        .put('/api/v1/inputs/1')
        .send(updateInput)
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.have.property('price');
          expect(res.body).to.have.property('qtyused').to.not.equal(0);
          expect(res.body).to.have.property('currenttotal').to.not.equal(0);
          expect(res.body).to.have.property('percentagecost').to.not.equal(0);
          done();
        });
    });

    it('# should return error if request id is not a number (update route)', (done) => {
      chai.request(app)
        .put('/api/v1/inputs/one')
        .send(updateInput)
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res).to.have.status(400);
          expect(res.body).to.have.property('error').that.is.a('string');
          done();
        });
    });

    it('# should return error for non-existent id', (done) => {
      chai.request(app)
        .put('/api/v1/inputs/100000')
        .send(updateInput)
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(404);
          expect(res.body).to.have.property('error').that.is.a('string');
          done();
        });
    });
  });

  describe('Delete requests for inputs', () => {
    it('# should delete input if exists', (done) => {
      chai.request(app)
        .delete('/api/v1/inputs/2')
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.have.property('message').that.is.a('string');
          expect(res.body).to.have.property('deleted').that.is.an('object');
          done();
        });
    });

    it('# should return error if id supplied does not exist', (done) => {
      chai.request(app)
        .delete('/api/v1/inputs/100000')
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(404);
          expect(res.body).to.have.property('error').that.is.a('string');
          done();
        });
    });

    it('# should return error if request id is not a number', (done) => {
      chai.request(app)
        .delete('/api/v1/inputs/two')
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res).to.have.status(400);
          expect(res.body).to.have.property('error').that.is.a('string');
          done();
        });
    });
  });
});

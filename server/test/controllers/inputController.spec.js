import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../index';
import inputMocks from '../mocks/inputMocks';

const { newInput, updateInput, editInput } = inputMocks;

chai.use(chaiHttp);
const { expect } = chai;

describe('Test for Input Endpoints', () => {
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
          expect(res.body).to.have.property('id').that.equals('1' || 1);
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
        .post('/api/v1/inputs/create')
        .send(newInput)
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(201);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('id').that.is.a('number');
          done();
        });
    });
  });

  describe('Put requests for inputs', () => {
    it('# should update already existing input', (done) => {
      chai.request(app)
        .put('/api/v1/inputs/update/1')
        .send(updateInput)
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.have.property('price');
          expect(res.body).to.have.property('qtyUsed').to.not.equal(0);
          expect(res.body).to.have.property('currentTotal').to.not.equal(0);
          expect(res.body).to.have.property('percentageCost').to.not.equal(0);
          done();
        });
    });

    it('# should return error for non-existent id', (done) => {
      chai.request(app)
        .put('/api/v1/inputs/update/100000')
        .send(updateInput)
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(404);
          expect(res.body).to.have.property('error').that.is.a('string');
          done();
        });
    });

    it('# should edit already existing input', (done) => {
      chai.request(app)
        .put('/api/v1/inputs/edit/1')
        .send(editInput)
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.have.property('name').that.equals('obara');
          expect(res.body).to.have.property('batch').that.equals('12-18');
          expect(res.body).to.have.property('price').that.equals('35000.00');
          done();
        });
    });

    it('# should return error if id does not exist', (done) => {
      chai.request(app)
        .put('/api/v1/inputs/edit/100000')
        .send(editInput)
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
        .delete('/api/v1/inputs/delete/1')
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.have.property('id').that.equals('1');
          done();
        });
    });

    it('# should return error if id supplied does not exist', (done) => {
      chai.request(app)
        .delete('/api/v1/inputs/delete/100000')
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(404);
          expect(res.body).to.have.property('error').that.is.a('string');
          done();
        });
    });
  });
});

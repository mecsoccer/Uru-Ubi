import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../index';
import inputMocks from '../mocks/inputMocks';

const {
  noNameInput, emptyNameInput, invalidNameInput, longNameInput,
  noBatchInput, emptyBatchInput, invalidBatchInput, longBatchInput,
  noPriceInput, emptyPriceInput, invalidPriceInput, noPriceUpdate, emptyPriceUpdate,
  invalidPriceUpdate,
  noUnitInput, emptyUnitInput, invalidUnitInput, longUnitInput,
  invalidQtyUsedUpdate, noQtyUsedUpdate, emptyQtyUsedUpdate,
} = inputMocks;

chai.use(chaiHttp);
const { expect } = chai;

describe('Test for Post Validation (Inputs)', () => {
  describe('tests for input name validation', () => {
    it('# should respond with error if input name is omitted', (done) => {
      chai.request(app)
        .post('/api/v1/inputs/create')
        .send(noNameInput)
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res).to.have.status(422);
          expect(res.body).to.have.property('error').that.is.a('string');
          done();
        });
    });

    it('# should respond with error for blank input name', (done) => {
      chai.request(app)
        .post('/api/v1/inputs/create')
        .send(emptyNameInput)
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res).to.have.status(422);
          expect(res.body).to.have.property('error').that.is.a('string');
          done();
        });
    });

    it('# should respond with error for invalid input name', (done) => {
      chai.request(app)
        .post('/api/v1/inputs/create')
        .send(invalidNameInput)
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res).to.have.status(422);
          expect(res.body).to.have.property('error').that.is.a('string');
          done();
        });
    });

    it('# should respond with error for long input name', (done) => {
      chai.request(app)
        .post('/api/v1/inputs/create')
        .send(longNameInput)
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res).to.have.status(422);
          expect(res.body).to.have.property('error').that.is.a('string');
          done();
        });
    });
  });

  describe('test for batch field', () => {
    it('# should respond with error if batch field is omitted', (done) => {
      chai.request(app)
        .post('/api/v1/inputs/create')
        .send(noBatchInput)
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res).to.have.status(422);
          expect(res.body).to.have.property('error').that.is.a('string');
          done();
        });
    });

    it('# should respond with error if batch field is blank', (done) => {
      chai.request(app)
        .post('/api/v1/inputs/create')
        .send(emptyBatchInput)
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res).to.have.status(422);
          expect(res.body).to.have.property('error').that.is.a('string');
          done();
        });
    });

    it('# should respond with error if batch input is invalid', (done) => {
      chai.request(app)
        .post('/api/v1/inputs/create')
        .send(invalidBatchInput)
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res).to.have.status(422);
          expect(res.body).to.have.property('error').that.is.a('string');
          done();
        });
    });

    it('# should respond with error if batch field is too long', (done) => {
      chai.request(app)
        .post('/api/v1/inputs/create')
        .send(longBatchInput)
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res).to.have.status(422);
          expect(res.body).to.have.property('error').that.is.a('string');
          done();
        });
    });
  });

  describe('test for price field', () => {
    it('# should respond with error if price field is omitted', (done) => {
      chai.request(app)
        .post('/api/v1/inputs/create')
        .send(noPriceInput)
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res).to.have.status(422);
          expect(res.body).to.have.property('error').that.is.a('string');
          done();
        });
    });

    it('# should respond with error if price field is blank', (done) => {
      chai.request(app)
        .post('/api/v1/inputs/create')
        .send(emptyPriceInput)
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res).to.have.status(422);
          expect(res.body).to.have.property('error').that.is.a('string');
          done();
        });
    });

    it('# should respond with error if price input is invalid', (done) => {
      chai.request(app)
        .post('/api/v1/inputs/create')
        .send(invalidPriceInput)
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res).to.have.status(422);
          expect(res.body).to.have.property('error').that.is.a('string');
          done();
        });
    });
  });

  describe('test for unitQuantity field', () => {
    it('# should respond with error if unitQuantity field is omitted', (done) => {
      chai.request(app)
        .post('/api/v1/inputs/create')
        .send(noUnitInput)
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res).to.have.status(422);
          expect(res.body).to.have.property('error').that.is.a('string');
          done();
        });
    });

    it('# should respond with error if unitQuantity field is blank', (done) => {
      chai.request(app)
        .post('/api/v1/inputs/create')
        .send(emptyUnitInput)
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res).to.have.status(422);
          expect(res.body).to.have.property('error').that.is.a('string');
          done();
        });
    });

    it('# should respond with error if unitQuantity input is invalid', (done) => {
      chai.request(app)
        .post('/api/v1/inputs/create')
        .send(invalidUnitInput)
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res).to.have.status(422);
          expect(res.body).to.have.property('error').that.is.a('string');
          done();
        });
    });

    it('# should respond with error if unitQuantity field is too long', (done) => {
      chai.request(app)
        .post('/api/v1/inputs/create')
        .send(longUnitInput)
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res).to.have.status(422);
          expect(res.body).to.have.property('error').that.is.a('string');
          done();
        });
    });
  });
});

describe('Test for Put / update Validation (Inputs)', () => {
  describe('test for price field', () => {
    it('should throw error if price is omitted', (done) => {
      chai.request(app)
        .put('/api/v1/inputs/update/1')
        .send(noPriceUpdate)
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res).to.have.status(422);
          expect(res.body).to.have.property('error').that.is.a('string');
          done();
        });
    });
    it('should throw error if price is empty', (done) => {
      chai.request(app)
        .put('/api/v1/inputs/update/1')
        .send(emptyPriceUpdate)
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res).to.have.status(422);
          expect(res.body).to.have.property('error').that.is.a('string');
          done();
        });
    });
    it('should throw error if price is invalid', (done) => {
      chai.request(app)
        .put('/api/v1/inputs/update/1')
        .send(invalidPriceUpdate)
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res).to.have.status(422);
          expect(res.body).to.have.property('error').that.is.a('string');
          done();
        });
    });
  });

  describe('test for qtyUsed field', () => {
    it('should throw error if qtyUsed is omitted', (done) => {
      chai.request(app)
        .put('/api/v1/inputs/update/1')
        .send(noQtyUsedUpdate)
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res).to.have.status(422);
          expect(res.body).to.have.property('error').that.is.a('string');
          done();
        });
    });
    it('should throw error if qtyUsed is empty', (done) => {
      chai.request(app)
        .put('/api/v1/inputs/update/1')
        .send(emptyQtyUsedUpdate)
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res).to.have.status(422);
          expect(res.body).to.have.property('error').that.is.a('string');
          done();
        });
    });
    it('should throw error if qtyUsed is invalid', (done) => {
      chai.request(app)
        .put('/api/v1/inputs/update/1')
        .send(invalidQtyUsedUpdate)
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res).to.have.status(422);
          expect(res.body).to.have.property('error').that.is.a('string');
          done();
        });
    });
  });
});

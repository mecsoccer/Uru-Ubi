import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../index';
import inputMocks from '../mocks/inputMocks';

const {
  noNameInput, emptyNameInput, invalidNameInput, longNameInput,
  noBatchInput, emptyBatchInput, invalidBatchInput, longBatchInput,
  noPriceInput, emptyPriceInput, invalidPriceInput,
  noUnitInput, emptyUnitInput, invalidUnitInput, longUnitInput,
  noQtyUsedInput, emptyQtyUsedInput, invalidQtyUsedInput, longQtyUsedInput,
} = inputMocks;

chai.use(chaiHttp);
const { expect } = chai;

describe('Test for Post Validation (Inputs)', () => {
  describe('tests for input field', () => {
    it('# should respond with error if input name is omitted', (done) => {
      chai.request(app)
        .post('/api/v1/inputs')
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
        .post('/api/v1/inputs')
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
        .post('/api/v1/inputs')
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
        .post('/api/v1/inputs')
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
        .post('/api/v1/inputs')
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
        .post('/api/v1/inputs')
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
        .post('/api/v1/inputs')
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
        .post('/api/v1/inputs')
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
        .post('/api/v1/inputs')
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
        .post('/api/v1/inputs')
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
        .post('/api/v1/inputs')
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
        .post('/api/v1/inputs')
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
        .post('/api/v1/inputs')
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
        .post('/api/v1/inputs')
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
        .post('/api/v1/inputs')
        .send(longUnitInput)
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res).to.have.status(422);
          expect(res.body).to.have.property('error').that.is.a('string');
          done();
        });
    });
  });

  describe('test for qtyUsed field', () => {
    it('# should respond with error if qtyUsed field is omitted', (done) => {
      chai.request(app)
        .post('/api/v1/inputs')
        .send(noQtyUsedInput)
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res).to.have.status(422);
          expect(res.body).to.have.property('error').that.is.a('string');
          done();
        });
    });

    it('# should respond with error if unitQuantity field is blank', (done) => {
      chai.request(app)
        .post('/api/v1/inputs')
        .send(emptyQtyUsedInput)
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res).to.have.status(422);
          expect(res.body).to.have.property('error').that.is.a('string');
          done();
        });
    });

    it('# should respond with error if unitQuantity input is invalid', (done) => {
      chai.request(app)
        .post('/api/v1/inputs')
        .send(invalidQtyUsedInput)
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res).to.have.status(422);
          expect(res.body).to.have.property('error').that.is.a('string');
          done();
        });
    });

    it('# should respond with error if unitQuantity field is too long', (done) => {
      chai.request(app)
        .post('/api/v1/inputs')
        .send(longQtyUsedInput)
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
  describe('tests for input field', () => {
    it('# should respond with error if input name is omitted', (done) => {
      chai.request(app)
        .put('/api/v1/inputs/1')
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
        .put('/api/v1/inputs/1')
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
        .put('/api/v1/inputs/1')
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
        .put('/api/v1/inputs/1')
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
        .put('/api/v1/inputs/1')
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
        .put('/api/v1/inputs/1')
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
        .put('/api/v1/inputs/1')
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
        .put('/api/v1/inputs/1')
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
        .put('/api/v1/inputs/1')
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
        .put('/api/v1/inputs/1')
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
        .put('/api/v1/inputs/1')
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
        .put('/api/v1/inputs/1')
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
        .put('/api/v1/inputs/1')
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
        .put('/api/v1/inputs/1')
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
        .put('/api/v1/inputs/1')
        .send(longUnitInput)
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res).to.have.status(422);
          expect(res.body).to.have.property('error').that.is.a('string');
          done();
        });
    });
  });

  describe('test for qtyUsed field', () => {
    it('# should respond with error if qtyUsed field is omitted', (done) => {
      chai.request(app)
        .put('/api/v1/inputs/1')
        .send(noQtyUsedInput)
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res).to.have.status(422);
          expect(res.body).to.have.property('error').that.is.a('string');
          done();
        });
    });

    it('# should respond with error if unitQuantity field is blank', (done) => {
      chai.request(app)
        .put('/api/v1/inputs/1')
        .send(emptyQtyUsedInput)
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res).to.have.status(422);
          expect(res.body).to.have.property('error').that.is.a('string');
          done();
        });
    });

    it('# should respond with error if unitQuantity input is invalid', (done) => {
      chai.request(app)
        .put('/api/v1/inputs/1')
        .send(invalidQtyUsedInput)
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res).to.have.status(422);
          expect(res.body).to.have.property('error').that.is.a('string');
          done();
        });
    });

    it('# should respond with error if unitQuantity field is too long', (done) => {
      chai.request(app)
        .put('/api/v1/inputs/1')
        .send(longQtyUsedInput)
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res).to.have.status(422);
          expect(res.body).to.have.property('error').that.is.a('string');
          done();
        });
    });
  });
});

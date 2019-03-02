import validateInput from './validationLibrary';

const { validate } = validateInput;

class inputValidator {
  static inputPostValidator(req, res, next) {
    const {
      name, batch, price, unitQuantity,
    } = req.body;

    const nameVal = validate('name', name, 2, 15, /^[a-z]+$/, 'feed');
    const batchVal = validate('batch', batch, 5, 5, /^[01][0-9]-[0-9]+$/, '11-19');
    const priceVal = validate('price', price, 4, 25, /^[0-9]+.[0-9][0-9]$/, '300.00');
    const unitQuantityVal = validate('unitQuantity', unitQuantity, 1, 15, /^[a-z]+$/, 'tonnes');

    if (nameVal !== true) {
      res.status(422).json({ error: nameVal });
    } else if (batchVal !== true) {
      res.status(422).json({ error: batchVal });
    } else if (priceVal !== true) {
      res.status(422).json({ error: priceVal });
    } else if (unitQuantityVal !== true) {
      res.status(422).json({ error: unitQuantityVal });
    } else {
      next();
    }
  }

  static inputUpdateValidator(req, res, next) {
    const { price, qtyUsed } = req.body;

    const priceVal = validate('price', price, 4, 25, /^[0-9]+.[0-9][0-9]$/, '300.00');
    const qtyUsedVal = validate('qtyUsed', qtyUsed, 1, 10, /^[0-9]+.[0-9][0-9]$/, '4.24');

    if (priceVal !== true) {
      res.status(422).json({ error: priceVal });
    } else if (qtyUsedVal !== true) {
      res.status(422).json({ error: qtyUsedVal });
    } else {
      next();
    }
  }
}

export default inputValidator;

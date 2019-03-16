import validateInput from './validationLibrary';

const { validateField } = validateInput;

function inputValidator(req, res, next) {
  const {
    name, batch, price, unitQuantity, qtyUsed,
  } = req.body;

  const nameVal = validateField('name', name, 2, 15, /^[a-z]+$/, 'feed');
  const batchVal = validateField('batch', batch, 5, 5, /^[01][0-9]-[0-9]+$/, '11-19');
  const priceVal = validateField('price', price, 4, 25, /^[0-9]+.[0-9][0-9]$/, '300.00');
  const unitQuantityVal = validateField('unitQuantity', unitQuantity, 1, 15, /^[a-z]+$/, 'tonnes');
  const qtyUsedVal = validateField('qtyUsed', qtyUsed, 1, 10, /^[0-9]+.[0-9][0-9]$/, '4.24');

  if (nameVal !== true) {
    res.status(422).json({ error: nameVal });
  } else if (batchVal !== true) {
    res.status(422).json({ error: batchVal });
  } else if (priceVal !== true) {
    res.status(422).json({ error: priceVal });
  } else if (unitQuantityVal !== true) {
    res.status(422).json({ error: unitQuantityVal });
  } else if (qtyUsedVal !== true) {
    res.status(422).json({ error: qtyUsedVal });
  } else {
    next();
  }
}

export default inputValidator;

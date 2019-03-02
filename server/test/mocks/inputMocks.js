const inputMocks = {
  newInput: {
    name: 'blood',
    batch: '11-18',
    price: '36000.00',
    unitQuantity: 'tonnes',
  },
  editInput: {
    name: 'obara',
    batch: '12-18',
    price: '35000.00',
    unitQuantity: 'tonnes',
  },
  updateInput: {
    price: '1000.00',
    qtyUsed: '5.40',
  },
  // name mocks
  noNameInput: {
    batch: '11-18',
    price: '36000.00',
    unitQuantity: 'tonnes',
  },
  emptyNameInput: {
    name: '',
    batch: '11-18',
    price: '36000.00',
    unitQuantity: 'tonnes',
  },
  invalidNameInput: {
    name: ',daad,',
    batch: '11-18',
    price: '36000.00',
    unitQuantity: 'tonnes',
  },
  longNameInput: {
    name: 'bloodakdadaasldjaskdaadasdasdasda',
    batch: '11-18',
    price: '36000.00',
    unitQuantity: 'tonnes',
  },
  // batch mocks
  noBatchInput: {
    name: 'blood',
    price: '36000.00',
    unitQuantity: 'tonnes',
  },
  emptyBatchInput: {
    name: 'blood',
    batch: '',
    price: '36000.00',
    unitQuantity: 'tonnes',
  },
  invalidBatchInput: {
    name: 'blood',
    batch: 'eleven-eighteen',
    price: '36000.00',
    unitQuantity: 'tonnes',
  },
  longBatchInput: {
    name: 'blood',
    batch: '12-2019',
    price: '36000.00',
    unitQuantity: 'tonnes',
  },
  // price mocks
  noPriceInput: {
    name: 'blood',
    batch: '11-19',
    unitQuantity: 'tonnes',
  },
  emptyPriceInput: {
    name: 'blood',
    batch: '12-19',
    price: '',
    unitQuantity: 'tonnes',
  },
  invalidPriceInput: {
    name: 'blood',
    batch: '12-19',
    price: 'five',
    unitQuantity: 'tonnes',
  },
  noPriceUpdate: {
    qtyUsed: 4.04,
  },
  emptyPriceUpdate: {
    price: '',
    qtyUsed: 4.04,
  },
  invalidPriceUpdate: {
    price: '1000.0009',
    qtyUsed: '4.04',
  },
  // unit mocks
  noUnitInput: {
    name: 'blood',
    batch: '11-18',
    price: '36000.00',
  },
  emptyUnitInput: {
    name: 'blood',
    batch: '11-19',
    price: '36000.00',
    unitQuantity: '',
  },
  invalidUnitInput: {
    name: 'blood',
    batch: '11-19',
    price: '36000.00',
    unitQuantity: '56',
  },
  longUnitInput: {
    name: 'blood',
    batch: '11-19',
    price: '36000.00',
    unitQuantity: 'tonnesdaddkdadka',
  },
  // quantity used mocks
  noQtyUsedUpdate: {
    price: '1000.00',
  },
  emptyQtyUsedUpdate: {
    price: '1000.00',
    qtyUsed: '',
  },
  invalidQtyUsedUpdate: {
    price: '1000.00',
    qtyUsed: 8,
  }
};

export default inputMocks;

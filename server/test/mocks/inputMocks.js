const inputMocks = {
  newInput: {
    name: 'protein',
    batch: '11-18',
    price: '36000.00',
    unitQuantity: 'tonnes',
    qtyUsed: '0.00',
  },
  existingInput1: {
    name: 'levamisole',
    batch: '11-18',
    price: '1600.00',
    unitQuantity: 'ml',
    qtyUsed: '0.00',
  },
  existingInput2: {
    name: 'gentamycin',
    batch: '11-18',
    price: '1000.00',
    unitQuantity: 'ml',
    qtyUsed: '0.00',
  },
  updateInput: {
    name: 'obara',
    batch: '12-18',
    price: '1000.00',
    unitQuantity: 'tonnes',
    qtyUsed: '5.40',
  },

  // name mocks
  noNameInput: {
    batch: '11-18',
    price: '36000.00',
    unitQuantity: 'tonnes',
    qtyUsed: '0.00',
  },
  emptyNameInput: {
    name: '',
    batch: '11-18',
    price: '36000.00',
    unitQuantity: 'tonnes',
    qtyUsed: '0.00',
  },
  invalidNameInput: {
    name: ',daad,',
    batch: '11-18',
    price: '36000.00',
    unitQuantity: 'tonnes',
    qtyUsed: '0.00',
  },
  longNameInput: {
    name: 'bloodakdadaasldjaskdaadasdasdasda',
    batch: '11-18',
    price: '36000.00',
    unitQuantity: 'tonnes',
    qtyUsed: '0.00',
  },
  // batch mocks
  noBatchInput: {
    name: 'blood',
    price: '36000.00',
    unitQuantity: 'tonnes',
    qtyUsed: '0.00',
  },
  emptyBatchInput: {
    name: 'blood',
    batch: '',
    price: '36000.00',
    unitQuantity: 'tonnes',
    qtyUsed: '0.00',
  },
  invalidBatchInput: {
    name: 'blood',
    batch: 'eleven-eighteen',
    price: '36000.00',
    unitQuantity: 'tonnes',
    qtyUsed: '0.00',
  },
  longBatchInput: {
    name: 'blood',
    batch: '12-2019',
    price: '36000.00',
    unitQuantity: 'tonnes',
    qtyUsed: '0.00',
  },
  // price mocks
  noPriceInput: {
    name: 'blood',
    batch: '11-19',
    unitQuantity: 'tonnes',
    qtyUsed: '0.00',
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
    qtyUsed: '0.00',
  },

  // unitQuantity mocks
  noUnitInput: {
    name: 'blood',
    batch: '11-18',
    price: '36000.00',
    qtyUsed: '0.00',
  },
  emptyUnitInput: {
    name: 'blood',
    batch: '11-19',
    price: '36000.00',
    unitQuantity: '',
    qtyUsed: '0.00',
  },
  invalidUnitInput: {
    name: 'blood',
    batch: '11-19',
    price: '36000.00',
    unitQuantity: '56',
    qtyUsed: '0.00',
  },
  longUnitInput: {
    name: 'blood',
    batch: '11-19',
    price: '36000.00',
    unitQuantity: 'tonnesdaddkdadka',
    qtyUsed: '0.00',
  },

  // quantity used mocks
  noQtyUsedInput: {
    name: 'blood',
    batch: '11-19',
    price: '1000.00',
    unitQuantity: 'can',
  },
  emptyQtyUsedInput: {
    name: 'blood',
    batch: '11-19',
    price: '1000.00',
    unitQuantity: 'can',
    qtyUsed: '',
  },
  invalidQtyUsedInput: {
    name: 'blood',
    batch: '11-19',
    price: '1000.00',
    unitQuantity: 'can',
    qtyUsed: 'five',
  },
  longQtyUsedInput: {
    name: 'blood',
    batch: '11-19',
    price: '1000.00',
    unitQuantity: 'can',
    qtyUsed: '0.0000',
  },
};

export default inputMocks;

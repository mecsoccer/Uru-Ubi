class validate {
  static validateField(field, input, min = 2, max = 10, regEx, example) {
    let message = '';

    if (!input) {
      message = `input ${field} must be included`;
    } else if (input.length < min || input.length > max) {
      message = `${field} length should be between ${min} and ${max}`;
    } else if (regEx.test(input) === false) {
      message = `wrong ${field} format, should be of the form: ${example}`;
    } else {
      return true;
    }

    return message;
  }
}

export default validate;

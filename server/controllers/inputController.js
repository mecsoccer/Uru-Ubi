import inputs from '../models/nonPersistent/inputs';

const inputData = [...inputs];

class Inputs {
  static getAllInputs(req, res) {
    res.status(200).json(inputData);
  }

  static getInput(req, res) {
    const { id } = req.params;
    let data;
    if (id > inputData.length || id < 0) {
      return res.status(404).json({ error: `resource with id ${id} does not exist` });
    }
    inputData.forEach((input) => {
      if (id === String(input.id)) {
        data = input;
      }
    });
    return res.status(200).json(data);
  }

  static postInput(req, res) {
    const {
      name, batch, unitQuantity, price,
    } = req.body;
    const id = inputData.length + 1;
    inputData.push({
      id, name, batch, price, unitQuantity, qtyUsed: 0, currentTotal: 0, percentageCost: 0,
    });
    return res.status(201).json(inputData[id - 1]);
  }

  static updateInput(req, res) {
    const { id } = req.params;
    const { price, qtyUsed } = req.body;
    const batchCost = 1000000;

    if (id > inputData.length || id < 0) {
      return res.status(404).json({ error: `resource with id ${id} does not exist` });
    }

    inputData.forEach((input) => {
      if (id === input.id) {
        const newTotal = Number(qtyUsed) * Number(price);
        const initialQtyUsed = Number(input.qtyUsed);
        const initialCurrentTotal = Number(input.currentTotal);
        input.price = price;
        input.qtyUsed = initialQtyUsed + Number(qtyUsed);
        input.currentTotal = newTotal + initialCurrentTotal;
        input.percentageCost = `${((initialCurrentTotal + newTotal) / batchCost * 100).toFixed(2)}%`;
      }
    });

    return res.status(200).json(inputData[id - 1]);
  }

  static editInput(req, res) {
    const { id } = req.params;
    const {
      name, batch, price, unitQuantity,
    } = req.body;

    if (id > inputData.length || id < 0) {
      return res.status(404).json({ error: `resource with id ${id} does not exist` });
    }

    inputData.forEach((input) => {
      if (id === input.id) {
        input.name = name;
        input.batch = batch;
        input.price = price;
        input.unitQuantity = unitQuantity;
      }
    });

    return res.status(200).json(inputData[id - 1]);
  }

  static deleteInput(req, res) {
    const { id } = req.params;

    if (id > inputData.length || id < 0) {
      return res.status(404).json({ error: `resource with id ${id} does not exist` });
    }

    const deletedData = inputData.splice(id - 1, 1);
    return res.status(200).json(deletedData[0]);
  }
}

export default Inputs;

import pool from '../models/migration';

class Inputs {
  static getAllInputs(req, res) {
    pool.query('SELECT * FROM inputs;')
      .then(data => res.status(200).json(data.rows))
      .catch();
  }

  static getInput(req, res) {
    const { id } = req.params;

    if (/[0-9]+/.test(id) === false) {
      return res.status(400).json({ error: 'request url contains id(parameter) that is not a number' });
    }

    pool.query('SELECT * FROM inputs WHERE id=$1;', [id])
      .then((data) => {
        if (data.rows.length === 0) {
          res.status(404).json({ error: `resource with id ${id} does not exist` });
        } else if (data.rows.length === 1) {
          res.status(200).json(data.rows[0]);
        }
      })
      .catch();

    return true;
  }

  static postInput(req, res) {
    const {
      name, batch, price, unitQuantity, qtyUsed,
    } = req.body;

    // check if input with same name and batch already exists before creating new input
    pool.query('SELECT * FROM inputs WHERE name=$1 AND batch=$2', [name, batch])
      .then((data) => {
        if (data.rows.length === 0) {
          const text = 'INSERT INTO inputs (name, batch, price, unitQuantity, qtyUsed, currentTotal, percentageCost) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;';
          const values = [name, batch, price, unitQuantity, qtyUsed || 0, 0, 0];

          pool.query(text, values)
            .then((addedRow) => {
              const addedProduct = addedRow.rows[0];
              res.status(201).json(addedProduct);
            })
            .catch();
        } else {
          res.status(409).json({ error: 'input with same name and batch already exists' });
        }
      })
      .catch();
  }

  static updateInput(req, res) {
    const { id } = req.params;
    const {
      name, batch, price, unitQuantity, qtyUsed,
    } = req.body;
    const batchCost = 1000000;

    if (/[0-9]+/.test(id) === false) {
      return res.status(400).json({ error: 'request url contains id(parameter) that is not a number' });
    }

    pool.query('SELECT * FROM inputs WHERE id=$1;', [id])
      .then((data) => {
        if (!data.rows[0]) {
          res.status(404).json({ error: `resource with id of ${id} does not exist` });
          return null;
        }
        return data;
      })
      .then((data) => {
        if (data) {
          const { currenttotal } = data.rows[0];
          const newCurrentTotal = Number(price) * Number(qtyUsed) + Number(currenttotal);
          const newPercentageCost = (newCurrentTotal / batchCost * 100).toFixed(2);

          const text = 'UPDATE inputs SET  name=$1, batch=$2, price=$3, unitQuantity=$4, qtyUsed=$5, currentTotal=$6, percentageCost=$7 WHERE id=$8 RETURNING *;';
          const values = [
            name, batch, price, unitQuantity, qtyUsed, newCurrentTotal, newPercentageCost, id];

          pool.query(text, values)
            .then(updatedData => res.status(200).json(updatedData.rows[0]))
            .catch();
        }
      })
      .catch();
    return true;
  }

  static deleteInput(req, res) {
    const { id } = req.params;

    if (/[0-9]+/.test(id) === false) {
      return res.status(400).json({ error: 'request url contains id(parameter) that is not a number' });
    }

    pool.query('DELETE FROM inputs WHERE id=$1 RETURNING *;', [id])
      .then((data) => {
        if (!data.rows[0]) {
          res.status(404).json({ error: `resource with id of ${id} does not exist` });
        } else if (data.rows[0] && data.rows.length === 1) {
          res.status(200).json({ message: 'successfully deleted!!!', deleted: data.rows[0] });
        }
      })
      .catch();

    return true;
  }
}

export default Inputs;

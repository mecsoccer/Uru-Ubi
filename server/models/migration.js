import pool from './database';

pool.query(`CREATE TABLE IF NOT EXISTS inputs(id SERIAL PRIMARY KEY NOT NULL, name TEXT NOT NULL,
    batch CHAR(5) NOT NULL, price NUMERIC NOT NULL, unitQuantity TEXT NOT NULL, 
    qtyUsed NUMERIC NOT NULL, currentTotal NUMERIC NOT NULL,
    percentageCost NUMERIC NOT NULL)`);

export default pool;

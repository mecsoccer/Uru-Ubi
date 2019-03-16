import pg from 'pg';
import customEnv from 'custom-env';

customEnv.env();

let connectionString;
let ssl = false;

connectionString = process.env.DATABASE_URL;
if (process.env.NODE_ENV === 'test') connectionString = 'postgres://jaachimma:password@localhost:5432/travis_ci_test';
if (process.env.NODE_ENV === 'production') ssl = true;

const { Pool } = pg;
const pool = new Pool({ connectionString, ssl });

export default pool;

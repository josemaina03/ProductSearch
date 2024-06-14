import { ConnectionPool } from 'mssql';

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  server: 'localhost',
  options: {
    encrypt: true, // Use this if you're on Windows Azure
    enableArithAbort: true,
  },
};

const pool = new ConnectionPool(config);

pool.connect().then(() => {
  console.log('Connected to SQL Server');
}).catch(err => {
  console.error('Database connection failed', err);
});

export default pool;

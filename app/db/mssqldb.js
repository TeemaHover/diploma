// db.js
import sql from "mssql";

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

let pool;

export const getDbConnection = async () => {
  if (!pool) {
    pool = await sql.connect(config);
  }
  return pool;
};

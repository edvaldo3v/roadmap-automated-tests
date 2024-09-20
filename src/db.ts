import { Client } from 'pg';
import pkg from 'pg';
const { Client: DB } = pkg;

const client = new DB({
  host: "localhost",
  port: 54321,
  user: "roadmap",
  password: "roadmap",
  database: "roadmap",
});

export async function createBooksTable(client: Client) {
  const sql = "CREATE TABLE IF NOT EXISTS books (id SERIAL PRIMARY KEY NOT NULL, name VARCHAR NOT NULL, author VARCHAR NOT NULL)";
  await client.query(sql);
}


export default client;


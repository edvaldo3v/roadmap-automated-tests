// import { Client } from 'pg';
import pkg from 'pg';
const { Client } = pkg;

const client = new Client({
  host: "localhost",
  port: 54321,
  user: "roadmap",
  password: "roadmap",
  database: "roadmap",
});

export default client;


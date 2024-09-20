import express from 'express';
import routes from './routes'
import { Client } from "pg";
import { createBooksTable } from './db';

const app = express();
app.use(express.json());


export const applicationConnection = async (app: express.Application, db: Client) => {
  await db.connect();
  await createBooksTable(db)
  routes(app, db)
}

export default app



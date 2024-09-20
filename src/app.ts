import express from 'express';
import routes from './routes'
import db, { createBooksTable } from './db';

const app = express();
app.use(express.json());

const startDB = async () => {
  await db.connect();
  await createBooksTable(db)
}

startDB()


routes(app)

export default app



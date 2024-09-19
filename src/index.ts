import { Client } from 'pg';
import express from 'express';
import { Request, Response } from 'express';
import db from './config/db';

const app = express();
app.use(express.json());

const PORT = 3335;

type Book = {
  id?: string
  name: string
  author: string
}

app.post('/books', async (req: Request, res: Response) => {
  try {
    if (db) {
      const book: Book = req.body;
      const newBook = await createBooks(db, book);
      res.status(201).json(newBook);
    } else {
      res.status(500).json({ error: "Sem conexão ao banco de dados" });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      console.log("Erro desconhecido");
    }
  }
});

app.get('/books/:id', async (req: Request, res: Response) => {
  try {
    if (db) {
      const { id: bookId } = req.params
      const book = await getBook(db, Number(bookId));
      res.status(200).json(book);
    } else {
      res.status(500).json({ error: "Sem conexão ao banco de dados" });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      console.log("Erro desconhecido");
    }
  }
});

async function createBooksTable(client: Client) {
  const sql = "CREATE TABLE IF NOT EXISTS books (id SERIAL PRIMARY KEY NOT NULL, name VARCHAR NOT NULL, author VARCHAR NOT NULL)";
  await client.query(sql);
}

export const createBooks = async (client: Client, book: Book) => {
  const result = await client.query('INSERT INTO books (name, author) VALUES ($1, $2) RETURNING *',
    [book.name, book.author]);
  return result.rows[0];
};

export const getBook = async (client: Client, bookId: number) => {
  const result = await client.query('SELECT * FROM books where id = $1', [bookId]);
  return result.rows[0];
};



const startApp = async (app: express.Application) => {
  await db.connect();
  await createBooksTable(db)
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}

startApp(app)

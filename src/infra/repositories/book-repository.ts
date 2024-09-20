import { Client } from "pg";
import { Book } from "../../domain/entities/book-entity";
import { IBookRepository } from "../../domain/repositories/book-repository";

export class BookRepository implements IBookRepository {
  constructor(
    private readonly db: Client
  ) { }

  async save(book: Book): Promise<Book> {
    const result = await this.db.query('INSERT INTO books (name, author) VALUES ($1, $2) RETURNING *',
      [book.name, book.author]);
    return result.rows[0];
  }

  async get(bookId: number): Promise<Book> {
    const result = await this.db.query('SELECT * FROM books where id = $1', [bookId]);
    return result.rows[0];
  }

}

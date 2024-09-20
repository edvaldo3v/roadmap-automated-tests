import { Book } from "../entities/book-entity";

export interface IBookRepository {
  save(book: Book): Promise<Book>
  get(bookId: number): Promise<Book>
}

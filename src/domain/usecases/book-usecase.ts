import { Book } from "../entities/book-entity";

export interface ICreateBookUsecase {
  execute(book: Book): Promise<void>
}

export interface ILoadBookUsecase {
  execute(bookId: number): Promise<Book>
}

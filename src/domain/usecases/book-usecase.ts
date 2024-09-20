import { Book } from "../entities/book-entity";

export interface ICreateBookUsecase {
  execute(book: Book): Promise<boolean>
}

export interface ILoadBookUsecase {
  execute(bookId: number): Promise<Book>
}

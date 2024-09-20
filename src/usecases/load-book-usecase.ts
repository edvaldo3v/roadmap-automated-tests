import { Book } from "../domain/entities/book-entity";
import { IBookRepository } from "../domain/repositories/book-repository";
import { ILoadBookUsecase } from "../domain/usecases/book-usecase";

export class LoadBookUsecase implements ILoadBookUsecase {
  constructor(
    private readonly bookRepository: IBookRepository,
  ) { }
  async execute(bookId: number): Promise<Book> {
    return await this.bookRepository.get(bookId)
  }

}

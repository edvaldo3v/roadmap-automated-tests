import { Book } from "../domain/entities/book-entity";
import { IBookRepository } from "../domain/repositories/book-repository";
import { ICreateBookUsecase } from "../domain/usecases/book-usecase";

export class CreateBookUsecase implements ICreateBookUsecase {
  constructor(
    private readonly bookRepository: IBookRepository,
  ) { }
  async execute(book: Book): Promise<boolean> {
    await this.bookRepository.save(book)
    return true
  }

}

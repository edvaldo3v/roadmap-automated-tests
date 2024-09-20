import { Request, Response } from 'express';
import { ICreateBookUsecase } from "../../domain/usecases/book-usecase";
import { Book } from '../../domain/entities/book-entity';
import { Controller } from '../../core/ports/controller';

export class CreateBookController implements Controller {
  constructor(
    private readonly createBookUsecase: ICreateBookUsecase
  ) { }
  async perform(req: Request, res: Response) {
    const data: Book = req.body;
    const book = await this.createBookUsecase.execute(data);
    res.status(201).json(book);
  }
}

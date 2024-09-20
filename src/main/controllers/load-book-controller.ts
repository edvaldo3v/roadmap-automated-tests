import { Request, Response } from 'express';
import { ILoadBookUsecase } from "../../domain/usecases/book-usecase";
import { Controller } from '../../core/ports/controller';

export class LoadBookController implements Controller {
  constructor(
    private readonly loadBookUsecase: ILoadBookUsecase
  ) { }
  async perform(req: Request, res: Response) {
    const { id: bookId } = req.params
    console.log(req.params)
    // console.log(bookId)
    const book = await this.loadBookUsecase.execute(Number(bookId));
    res.status(200).json(book);
  }
}

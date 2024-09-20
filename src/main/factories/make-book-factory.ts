
import { BookRepository } from '../../infra/repositories/book-repository.js'
import { CreateBookUsecase } from '../../usecases/create-book-usecase.js'
import { CreateBookController } from '../controllers/create-book-controller.js'
import db from '../../db';
import { LoadBookUsecase } from '../../usecases/load-book-usecase.js';
import { Controller } from '../../core/ports/controller.js';
import { LoadBookController } from '../controllers/load-book-controller.js';

export const makeCreateBookControllerFactory = (): Controller => {
  return new CreateBookController(
    new CreateBookUsecase(
      new BookRepository(db),
    )
  )
}

export const makeLoadBookControllerFactory = (): Controller => {
  return new LoadBookController(
    new LoadBookUsecase(
      new BookRepository(db),
    )
  )
}

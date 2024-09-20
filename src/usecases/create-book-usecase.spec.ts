import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { Client } from 'pg'
import { IBookRepository } from '../domain/repositories/book-repository'
import { Book } from '../domain/entities/book-entity'
import { CreateBookUsecase } from './create-book-usecase'

vi.mock('pg', () => {
  const Client = vi.fn()
  Client.prototype.connect = vi.fn()
  Client.prototype.query = vi.fn()
  Client.prototype.end = vi.fn()

  return { Client }
})

export class BookRepositoryMock implements IBookRepository {

  async save(book: Book): Promise<Book> {
    return book
  }

  async get(_: number): Promise<Book> {
    const book: Book = {
      id: 1,
      name: "itgest",
      author: "Pedro Kondo"
    }
    return book;
  }

}

describe('save a book', () => {
  let client: Client

  beforeEach(() => {
    client = new Client()
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should return  successfully message', async () => {
    const book: Book = {
      id: 1,
      name: "itgest",
      author: "Pedro Kondo"
    }

    const createBookUsecaseFactory = new CreateBookUsecase(
      new BookRepositoryMock()
    )

    const result = await createBookUsecaseFactory.execute(book)
    expect(result).toBe(true)

  })
})

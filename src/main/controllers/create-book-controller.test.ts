import { expect, describe, it, beforeAll, afterAll } from 'vitest'
import request from 'supertest';
import { PostgreSqlContainer, StartedPostgreSqlContainer } from "@testcontainers/postgresql";
import { Client } from "pg";
import app, { applicationConnection } from '../../app';

let postgresContainer: StartedPostgreSqlContainer;
let postgresClient: Client;

beforeAll(async () => {
  postgresContainer = await new PostgreSqlContainer().start();
  postgresClient = new Client({ connectionString: postgresContainer.getConnectionUri() });
  await applicationConnection(app, postgresClient)

});

afterAll(async () => {
  await postgresClient.end();
  await postgresContainer.stop();
});

describe('API Books', () => {

  it('deve registar um livro', async () => {
    const book = {
      name: "itgest",
      author: "Pedro Kondo"
    }
    const response = await request(app).post('/books').send(book);
    expect(response.status).toBe(201);
  });

  it('deve recuperar o livro', async () => {
    const bookId = 1
    const response = await request(app).get(`/books/${bookId}`);
    console.log("book: ", response.body)
    expect(response.status).toBe(200);
  });

})


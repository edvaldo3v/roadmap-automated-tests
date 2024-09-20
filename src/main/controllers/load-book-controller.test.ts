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

  it('deve retornar um livro pelo id', async () => {
    const book = {
      name: "itgest",
      author: "Pedro Kondo"
    }
    await request(app).post('/books').send(book);

    const response = await request(app).get('/books/1');
    expect(response.status).toBe(200);
  });
})

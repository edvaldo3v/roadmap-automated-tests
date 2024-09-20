import express from 'express';
import { Client } from "pg";
import { makeCreateBookControllerFactory, makeLoadBookControllerFactory } from './main/factories/make-book-factory';
import { routeAdapter } from './core/adapters/route-adapater';


export default (app: express.Application, db: Client) => {
  app.post('/books', routeAdapter(makeCreateBookControllerFactory(db)));
  app.get('/books/:id', routeAdapter(makeLoadBookControllerFactory(db)));
}




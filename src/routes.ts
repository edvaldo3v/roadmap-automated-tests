import express from 'express';
import { makeCreateBookControllerFactory, makeLoadBookControllerFactory } from './main/factories/make-book-factory';
import { routeAdapter } from './core/adapters/route-adapater';


export default (app: express.Application) => {
  app.post('/books', routeAdapter(makeCreateBookControllerFactory()));
  app.get('/books/:id', routeAdapter(makeLoadBookControllerFactory()));
}




import { Request, Response } from 'express';


import { Controller } from '../ports/controller.js';

export const routeAdapter = (
  controller: Controller,
) => {
  return async (request: Request, response: Response) => {
    try {
      controller.perform(request, response)
    } catch (error) {
      if (error instanceof Error) {
        response.status(500).json({ error: error.message });
      } else {
        response.status(500).json({ error: "Erro desconhecido" });
      }
    }
  }
}


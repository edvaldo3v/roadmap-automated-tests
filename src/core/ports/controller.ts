import { Request, Response } from 'express';

export interface Controller {
  perform: (req: Request, res: Response) => Promise<any>
}

import { Request, Response } from 'express';

export const getDogs = (_req: Request, res: Response) => {
  res.send('Hello Dog');
};

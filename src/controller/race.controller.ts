import { Request, Response } from 'express';
import { getRaceWithTemper } from '../service/race.service';
export const getDogs = async (_req: Request, res: Response) => {
  try {
    const races = await getRaceWithTemper();
    console.log(races);
    res.json(races);
  } catch (error) {
    console.log({ error });
  }
};

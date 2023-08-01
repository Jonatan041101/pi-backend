import { Request, Response } from 'express';
import { getAllRaceWithTemper } from '../service/race.service';
export const getDogs = async (_req: Request, res: Response) => {
  try {
    const races = await getAllRaceWithTemper();
    console.log(races);
    res.json(races);
  } catch (error) {
    console.log({ error });
  }
};

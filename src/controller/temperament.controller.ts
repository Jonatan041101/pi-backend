import { Request, Response } from 'express';
import { getAllTemperament } from '../service/temperament.service';

export const getTemperaments = async (_req: Request, res: Response) => {
  try {
    const temperaments = await getAllTemperament();
    return res.json(temperaments);
  } catch (error) {
    const err = error as Error;
    return res.status(500).json({ message: err.message });
  }
};

import { Request, Response } from 'express';
import { getRaceWithTemper } from '../service/race.service';
import { RESPONSE } from '../test/helpers/text_test';
export const getDogs = async (req: Request, res: Response) => {
  try {
    const name = req.query.name ? String(req.query.name) : undefined;
    const races = await getRaceWithTemper(name);
    if (name && races?.length === 0) {
      return res.status(404).json({ message: RESPONSE });
    }
    res.json(races);
  } catch (error) {
    console.log({ error });
    const err = error as Error;
    return res.status(500).json({ message: err.message });
  }
};

import { Request, Response } from 'express';
import { getRaceId, getRaceWithTemper } from '../service/race.service';
import { z } from 'zod';
const isString = z.string().min(10).max(150);
import { CONTEXT_RESPONSE, RESPONSE } from '../test/helpers/text_test';
export const getDogs = async (req: Request, res: Response) => {
  try {
    const name = req.query.name ? String(req.query.name) : undefined;
    const races = await getRaceWithTemper(name);
    if (name && races?.length === 0) {
      return res.status(404).json({ message: `${CONTEXT_RESPONSE} ${name}` });
    }
    res.json(races);
  } catch (error) {
    console.log({ error });
    const err = error as Error;
    return res.status(500).json({ message: err.message });
  }
};
export const getDog = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    isString.parse(id);
    const race = await getRaceId(id);
    if (!race) {
      return res
        .status(404)
        .json({ message: `El id ${id} de la raza no existe` });
    }
    res.json(race);
  } catch (error) {
    const err = error as Error;
    return res.status(500).json({ message: err.message });
  }
};
export const createDog = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    const err = error as Error;
    return res.status(500).json({ message: err.message });
  }
};

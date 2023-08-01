import { Request, Response } from 'express';
import { prisma } from '../database/db';
export const getDogs = async (_req: Request, res: Response) => {
  const races = await prisma.race.findMany();
  console.log(races);

  res.json(races);
};

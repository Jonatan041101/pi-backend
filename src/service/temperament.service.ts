import { prisma } from '../database/db';

export const searchTemper = async (name: string) => {
  try {
    const existTemper = await prisma.temper.findFirst({
      where: {
        name: name.trim(),
      },
    });
    return existTemper;
  } catch (error) {
    console.log(error);
  }
};
export const createTemper = async (name: string) => {
  try {
    const temper = await prisma.temper.create({
      data: {
        name: name.trim(),
      },
    });
    return temper;
  } catch (error) {
    console.log(error);
  }
};

import { z } from 'zod';
export const isString = z.string().min(10).max(150);
export const isArray = z.array(z.string());
export const isNumber = z.number();

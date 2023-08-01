export const createRouteContext = `
import { Router } from 'express';
import path from 'node:path';
const fileName = path.basename(__filename).split('.')[0];
console.log(fileName);
const router = Router();
router.get('/', (_req, res) => {
  res.send('Ruta ' + fileName);
});

export { router };
`;

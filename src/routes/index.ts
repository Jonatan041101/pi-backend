import { Router } from 'express';
import { readdirSync } from 'node:fs';

const router = Router();
const PATH_ROUTER = `${__dirname}`;
const cleanFileName = (fileName: string) => {
  const name = fileName.split('.')[0];
  return name;
};

readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleanName = cleanFileName(fileName);
  if (cleanName !== 'index') {
    import(`./${cleanName}`).then((moduleRouter) => {
      router.use(`/${cleanName}`, moduleRouter.router);
      console.log(`Ruta ${cleanName} cargada...`);
    });
  }
});
export default router;

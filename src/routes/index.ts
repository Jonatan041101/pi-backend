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
      console.log(`Ruta ${cleanName} cargada...`);
      router.use(`/${cleanName}`, moduleRouter.router);
    });
  }
});
export default router;

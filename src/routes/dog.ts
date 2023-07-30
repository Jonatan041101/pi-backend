import { Router } from 'express';
import { getDogs } from '../controller/dog.controller';

const router = Router();
router.get('/', getDogs);

export { router };

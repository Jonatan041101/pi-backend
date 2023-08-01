import { Router } from 'express';
import { getDogs } from '../controller/race.controller';

const router = Router();
router.get('/', getDogs);

export { router };

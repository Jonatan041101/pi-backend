import { Router } from 'express';
import { getDog, getDogs } from '../controller/race.controller';

const router = Router();
router.get('/', getDogs);
router.get('/:id', getDog);

export { router };

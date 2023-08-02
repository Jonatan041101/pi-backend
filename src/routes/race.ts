import { Router } from 'express';
import { createDog, getDog, getDogs } from '../controller/race.controller';

const router = Router();
router.get('/', getDogs);
router.get('/:id', getDog);
router.post('/', createDog);
export { router };

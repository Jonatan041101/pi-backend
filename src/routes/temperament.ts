import { Router } from 'express';
import { getTemperaments } from '../controller/temperament.controller';
const router = Router();
router.get('/', getTemperaments);

export { router };

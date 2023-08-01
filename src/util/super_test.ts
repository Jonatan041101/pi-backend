import request from 'supertest';
import app from '../server/app';
const api = request(app);
export { api };

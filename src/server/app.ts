import express from 'express';
import cors from 'cors';
const app = express();
import routes from '../routes/'
app.use(cors({
 origin:process.env.FRONTEND || 'http://localhost:3001'
}))
app.use('/',routes)
export default app;

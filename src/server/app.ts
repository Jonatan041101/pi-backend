import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors({
 origin:process.env.FRONTEND || 'http://localhost:3001'
}))
export default app;

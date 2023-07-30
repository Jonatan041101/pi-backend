import express from 'express';

const app = express();
app.get('/', (_req, res) => {
 res.json({ message: 'Bienvenido a Api Dog' });
});
export default app;

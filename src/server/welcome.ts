import app from './app';

const serverIsRunning = app.get('/', (_req, res) => {
  res.json({ message: 'Bienvenido a Api Dog' });
});
export default serverIsRunning;

import app from './app';
import './welcome';
const serverStart = (port: number) => {
  return app.listen(port, () => {
    console.log(`Servidor corriend en el puerto ${port}`);
  });
};
export default serverStart;

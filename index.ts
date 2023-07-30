import app from './src/server/app';
import './src/server/welcome';
const PORT = process.env.PORT || 3000;

const serverStart = () => {
  app.listen(PORT);
  console.log(`Servidor corriend en el puerto ${PORT}`);
};
serverStart();

import serverStart from './src/server/server';
import './src/routes'
const PORT = Number(process.env.PORT) || 3000;


serverStart(PORT);

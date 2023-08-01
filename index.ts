import serverStart from './src/server/server';
import { getRaces } from './src/wrapper';
const PORT = Number(process.env.PORT) || 3000;

serverStart(PORT);
getRaces();

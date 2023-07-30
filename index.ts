import serverStart from './src/server/server';
const PORT = Number(process.env.PORT) || 3000;


serverStart(PORT);

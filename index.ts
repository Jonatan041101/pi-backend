import serverStart from './src/server/server';
// import './src/server/welcome';
const PORT = Number(process.env.PORT) || 3000;


serverStart(PORT);

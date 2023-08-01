import serverStart from './src/server/server';
import { initialCreateRaces, initialCreateTemperaments } from './src/wrapper';
const PORT = Number(process.env.PORT) || 3000;

serverStart(PORT);
const intials = async () => {
  await initialCreateTemperaments();
  await initialCreateRaces();
};
// intials();

import app, { applicationConnection } from './app';
import db from './db';

const PORT = 3335;

const startApp = async () => {
  await applicationConnection(app, db)

  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}

startApp()

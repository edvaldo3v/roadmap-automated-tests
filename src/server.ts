import app from './app';
import db, { createBooksTable } from './db';

const PORT = 3335;


const startApp = async () => {
  await db.connect();
  await createBooksTable(db)
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}

startApp()

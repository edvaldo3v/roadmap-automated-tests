import app from './app';

const PORT = 3335;

const startApp = async () => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}

startApp()

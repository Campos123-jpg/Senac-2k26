const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Bem-vindo ao meu servidor!</h1>');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send("<h1>Bem-vindo ao meu servidor Express!</h1>");
});
app.get('/Produtos', (req, res) => {
  res.send('<h1>Lista de produtos</h1>' + JSON.stringify(produtos));
});

app.get('/usuarios/:id', (req, res) => {
  const id = Number(req.params.id);
 const usuario = usuarios.find((item) => {
 return item.id === id;
});

if (item.length === 0) {
  return res.status(404).json({ mensagem: 'Usuário não encontrado' });
}
res.status(200).json(usuario);

});

let produtos = [
  { id: 1, nome: 'Produto A', preco: 10.99 },
  { id: 2, nome: 'Produto B', preco: 19.99 },
  { id: 3, nome: 'Produto C', preco: 5.99 }
];

let usuarios = [
  { id: 1, nome: 'João', email: 'joao@example.com' },
  { id: 2, nome: 'Maria', email: 'maria@example.com' },
  { id: 3, nome: 'José', email: 'jose@example.com' },
  { id: 4, nome: 'Emanuelli', email: 'emanuelli@example.com' }
];

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
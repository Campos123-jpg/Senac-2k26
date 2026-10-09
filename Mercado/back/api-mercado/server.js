const express = require("express");
const mysql = require("mysql2");

const app = express();
const port = 3000;

app.use(express.json());

const status500 = "Erro interno do servidor";
const status200 = "OK";
const status404 = "Não encontrado";
const status400 = "Requisição inválida";

const conexao = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "mercado",
});

conexao.connect((err) => {
  if (err) {
    console.error("Erro ao conectar no banco de dados MySQL:", err);
    return;
  }
  console.log("Conectado ao banco de dados MySQL com sucesso!");
});

app.get("/", (req, res) => {
  return res.status(200).json({ mensagem: status200 });
});

app.get("/usuarios", (req, res) => {
  const sql = "SELECT * FROM usuarios";
  conexao.query(sql, (err, results) => {
    if (err) {
      console.error("Erro ao consultar usuários:", err);
      return res.status(500).json({ mensagem: status500 });
    }
    return res.status(200).json(results);
  });
});

app.get("/usuario/:id", (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ mensagem: status400 });
  }
  const sql = "SELECT * FROM usuarios WHERE id = ?";
  conexao.query(sql, [id], (err, results) => {
    if (err) {
      console.error("Erro ao consultar usuário:", err);
      return res.status(500).json({ mensagem: status500 });
    }
    if (results.length === 0) {
      return res.status(404).json({ mensagem: status404 });
    }
    return res.status(200).json(results[0]);
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
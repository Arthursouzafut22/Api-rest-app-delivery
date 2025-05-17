import express from "express";
import dotenv from "dotenv";
import { conexao } from "./models/conexao.js";

dotenv.config();
const app = express();
app.use(express.json());

// Geral...
app.get("/", function (_, res) {
  const sql = "SELECT * FROM delivery";

  conexao.query(sql, (error, resposta) => {
    if (error) {
      return res.status(500).json({ error: "Rota invalida não existe!" });
    }

    return res.status(200).json(resposta);
  });
});

// tipo..
app.get("/:id", function (req, res) {
  const { id } = req.params;

  if (id === null) {
    return res.status(201).json("Esse tipo não existe.");
  }

  const sql = `SELECT * FROM delivery WHERE tipo = '${id}' `;
  const tiposPermitidos = ["hamburguer", "pizza", "bebidas"];

  if (!tiposPermitidos.includes(id)) {
    return res.status(404).json({
      error: "Esse tipo não existe.",
    });
  }

  conexao.query(sql, (error, resposta) => {
    if (error) {
      return res.status(500).json({ error: "tipo invalido não existe!" });
    }

    return res.status(200).json(resposta);
  });
});

app.listen(process.env.PORT || 3005, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});

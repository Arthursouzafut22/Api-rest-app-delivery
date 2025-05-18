import { queryConsult } from "../models/query.js";

export function typeController(req, res) {
  const { id } = req?.params;

  const sql = `SELECT * FROM delivery WHERE tipo = '${id}' `;
  const tiposPermitidos = ["burguer", "pizza", "bebidas"];

  if (!tiposPermitidos.includes(id)) {
    return res.status(404).json({
      error: "Esse tipo não existe.",
    });
  }

  queryConsult(res, sql, { error: "tipo invalido não existe!" });
}

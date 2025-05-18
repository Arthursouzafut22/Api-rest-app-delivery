import { queryConsult } from "../models/query.js";

export function homeController(_, res) {
  const sql = "SELECT * FROM delivery";

  queryConsult(res, sql, { error: "Rota invalida não existe!" });
}

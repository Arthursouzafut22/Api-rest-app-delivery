import { conexao } from "./conexao.js";

export const queryConsult = (res, sql, erro) => {
  conexao.query(sql, (error, resposta) => {
    if (error) {
      return res.status(500).json(erro);
    }

    return res.status(200).json(resposta);
  });
};

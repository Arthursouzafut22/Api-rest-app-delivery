import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

export const conexao = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

try {
  conexao.connect((error) => {
    if (!error) {
      return console.log("Conexão realizada com sucesso.");
    }
  });
} catch (erro) {
  console.error("Error na conexão com banco de dados.", erro);
}

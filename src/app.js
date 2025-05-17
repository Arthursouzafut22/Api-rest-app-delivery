import express from "express";
import dotenv from "dotenv";


dotenv.config();
const app = express();

app.listen(process.env.PORT || 3005, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});

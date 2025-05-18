import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import { routerGlobal } from "./routes/routerGlobal.js";
import { routerType } from "./routes/routerType.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/imagem", express.static(path.resolve("assets/img")));

app.use(routerGlobal);
app.use(routerType);

app.listen(process.env.PORT || 3005, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});

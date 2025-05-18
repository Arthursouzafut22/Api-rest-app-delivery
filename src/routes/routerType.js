import { Router } from "./router.js";
import { typeController } from "../controllers/typeController.js";

export const routerType = Router.get("/:id", typeController);
import { Router } from "./router.js";
import { homeController } from "../controllers/homeController.js";

export const routerGlobal = Router.get("/", homeController);

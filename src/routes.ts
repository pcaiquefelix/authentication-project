import { Router } from "express";
import UserController from "./app/controllers/UserController";
import GetUserController from "./app/controllers/GetUserController";
import AuthController from "./app/controllers/AuthController";

import authMiddleware from "./app/middlewares/authMiddleware";

const routes = Router();

routes.post("/users", UserController.store);
// routes.get("/users", GetUserController.store);
routes.post("/auth", AuthController.authenticate);

routes.get("/users", authMiddleware, UserController.index);

export default routes;
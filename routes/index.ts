import { Router } from "express";
import users from "./users";

const routes = Router();
routes.use(users);

export default routes;
import { Router } from "express";
import tests from "./tests";
import users from "./users";

const routes = Router();
routes.use(users);
routes.use(tests);

export default routes;
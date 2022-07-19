import { Router } from "express";
import { signInController, signUpController } from "../../controllers/signUserControllers";
import signInMiddleware from "../../middlewares/signInMiddleware";
import signUpMiddleware from "../../middlewares/signUpMiddleware";

const users = Router();

users.post('/sign-up', signUpMiddleware, signUpController);
users.post('/sign-in', signInMiddleware, signInController);

export default users;
import { Router } from "express";
import { setTestController } from "../../controllers/testsControllers";
import { setTestMiddleware } from "../../middlewares/testsMiddlewares";
import { authSetTestDataMiddleware } from "../../middlewares/authDataMiddleware";
import authActionsMiddleware from "../../middlewares/authActionsMiddleware";

const tests = Router();

tests.post('/tests', authActionsMiddleware, setTestMiddleware, authSetTestDataMiddleware, setTestController);
tests.get('/tests/:discipline', authActionsMiddleware);
tests.get('/tests/:teacher', authActionsMiddleware);

export default tests;
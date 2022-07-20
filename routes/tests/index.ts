import { Router } from "express";
import { getTestsByDisciplineController, getTestsByTeacherController, setTestController } from "../../controllers/testsControllers";
import { getTestsByDisciplineMiddleware, getTestsByTeacherMiddleware, setTestMiddleware } from "../../middlewares/testsMiddlewares";
import { authSetTestDataMiddleware } from "../../middlewares/authDataMiddleware";
import authActionsMiddleware from "../../middlewares/authActionsMiddleware";

const tests = Router();

tests.post('/tests', authActionsMiddleware, setTestMiddleware, authSetTestDataMiddleware, setTestController);
tests.get('/tests/disciplines/:disciplineName', authActionsMiddleware, getTestsByDisciplineMiddleware, getTestsByDisciplineController);
tests.get('/tests/teachers/:teacherName', authActionsMiddleware, getTestsByTeacherMiddleware, getTestsByTeacherController);

export default tests;
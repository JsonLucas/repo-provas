import { Request, Response, NextFunction } from "express";
import testsServices from "../services/tests";
import { validateTest } from "../utils/validations";

export const setTestMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    const { status, error } = validateTest(body);
    if(!status) throw { code: 422, error };

    res.locals.data = body;
    next();
}

export const getTestsByDisciplineMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { disciplineName } = req.params;
    const tests = await testsServices.getTestsByDisciplineName(disciplineName);
    if(!tests) throw { code: 404 };

    res.locals.testsByDiscipline = tests;
    next();
}

export const getTestsByTeacherMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { teacherName } = req.params;
    const tests = await testsServices.getTestsByTeacherName(teacherName);
    if(!tests) throw { code: 404 };

    res.locals.testsByTeacher = tests;
    next();
}
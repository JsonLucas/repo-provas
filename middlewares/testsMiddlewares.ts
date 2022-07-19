import { Request, Response, NextFunction } from "express";
import { validateTest } from "../utils/validations";

export const setTestMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    const { status, error } = validateTest(body);
    if(!status) throw { code: 422, error };

    res.locals.data = body;
    next();
}
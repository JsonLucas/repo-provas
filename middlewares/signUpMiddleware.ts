import { validateSignUp } from "../utils/validations";
import { NextFunction, Request, Response } from "express";

const signUpMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    const { status, error } = validateSignUp(body);
    if(!status) throw { code: 422, error };

    res.locals.data = body;
    next();
}

export default signUpMiddleware;
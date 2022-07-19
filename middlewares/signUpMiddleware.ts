import { validateSignUp } from "../utils/validations";
import { NextFunction, Request, Response } from "express";
import usersServices from "../services/users";

const signUpMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    const { status, error } = validateSignUp(body);
    if(!status) throw { code: 422, error };

    const user = await usersServices.getByEmail(body.email);
    if(user) throw { code: 409, error: 'this email is already in use.' };
    
    res.locals.data = body;
    next();
}

export default signUpMiddleware;
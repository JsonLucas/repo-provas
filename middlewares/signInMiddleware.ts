import { NextFunction, Request, Response } from "express";
import usersServices from "../services/users";
import { validateSignIn } from "../utils/validations";

const signInMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    const {status, error} = validateSignIn(body);
    if(!status) throw { code: 422, error };
     
    const user = await usersServices.getByEmail(body.email);
    if(!user) throw { code: 404 };

    res.locals.data = body;
    res.locals.user = user;
    next();
}

export default signInMiddleware;
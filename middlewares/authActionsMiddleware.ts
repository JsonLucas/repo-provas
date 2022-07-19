import { NextFunction, Request, Response } from "express";
import { decodeToken } from "../utils/tokenUtils";

const authActionsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;
    if(!authorization) throw { code: 401 };

    const token = authorization.split(' ');
    const decode = decodeToken(token[1]);
    res.locals.userId = decode;
    next();
}

export default authActionsMiddleware;
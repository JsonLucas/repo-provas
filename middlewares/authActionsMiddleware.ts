import { NextFunction, Request, Response } from "express";
import { decodeToken } from "../utils/tokenUtils";

const authActionsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;
    if(!authorization) throw { code: 401 };

    const decode = decodeToken(authorization);
    console.log(authorization, decode);
    res.sendStatus(200);
}

export default authActionsMiddleware;
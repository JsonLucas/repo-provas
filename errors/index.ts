import { NextFunction, Request, Response } from "express";
import { Error } from "../types";

const handleErrors = (e: Error, req: Request, res: Response, next: NextFunction) => {
    if(e.code){
        if(e.error){
            res.status(e.code).send(e.error);
            return;
        }
        res.sendStatus(e.code);
        return;
    }
    console.log(e.message);
    res.sendStatus(500);
}

export default handleErrors;
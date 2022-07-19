import { Request, Response } from "express";
import usersServices from "../services/users";
import { generateToken } from "../utils/tokenUtils";

export const signUpController = async (req: Request, res: Response) => {
    const { data } = res.locals;
    await usersServices.insert(data);
    res.sendStatus(201);
}

export const signInController = async (req: Request, res: Response) => {
    const { data, user } = res.locals;
    if(data.password !== user.password) throw { code: 400, error: 'invalid credentials.' };
    
    const token = generateToken(user.id);
    res.status(200).send({ token });
}
import jwt from 'jsonwebtoken';
import { jwtSecret } from './environment';

export const generateToken = (userId: number) => {
    if(!jwtSecret) throw { code: 500, error: 'invalid credential.' };
    return jwt.sign(userId.toString(), jwtSecret);
}

export const decodeToken = (token: string) => {
    if(!jwtSecret) throw { code: 500, error: 'invalid credential.' };
    const isValid = jwt.verify(token, jwtSecret);
    return isValid;
}
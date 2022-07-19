import joi from 'joi';
import { signUsers } from '../../types';

export const signUpSchema = joi.object<signUsers>({
    email: joi.string().email().required(),
    password: joi.string().required()
});
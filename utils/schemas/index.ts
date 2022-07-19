import joi from 'joi';
import { setTest, signUsers } from '../../types';

export const signUpSchema = joi.object<signUsers>({
    email: joi.string().email().required(),
    password: joi.string().required()
});

export const testsSchema = joi.object<setTest>({
    name: joi.string().required(),
    pdfUrl: joi.string().uri().required(),
    category: joi.string().equal('Prática', 'Recuperação', 'category').required(),
    teacher: joi.string().required(),
    discipline: joi.string().required()
});
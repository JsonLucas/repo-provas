import joi from 'joi';
import { setTest, signUpUser, signInUser } from '../../types';

export const signUpSchema = joi.object<signUpUser>({
    email: joi.string().email().required(),
    password: joi.string().required(),
    confirmPassword: joi.ref('password')
});

export const signInSchema = joi.object<signInUser>({
    email: joi.string().email().required(),
    password: joi.string().required()
});

export const testsSchema = joi.object<setTest>({
    name: joi.string().required(),
    pdfUrl: joi.string().uri().required(),
    category: joi.string().equal('Prática', 'Recuperação', 'test_category', 'test-category').required(),
    teacher: joi.string().required(),
    discipline: joi.string().required()
});

//tests are included
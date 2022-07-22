import { setTest, signInUser, signUpUser } from "../types";
import { signInSchema, signUpSchema, testsSchema } from "./schemas";

export const validateSignUp = (body: signUpUser) => {
    const { error } = signUpSchema.validate(body);
    if(error){ 
        return { status: false, error };
    }
    return { status: true };
}

export const validateSignIn = (body: signInUser) => {
    const { error } = signInSchema.validate(body);
    if(error){ 
        return { status: false, error };
    }
    return { status: true };
}

export const validateTest = (body: setTest) => {
    const { error } = testsSchema.validate(body);
    if(error){
        return { status: false, error };
    }
    return { status: true };
}
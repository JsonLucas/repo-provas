import { setTest, signUsers } from "../types";
import { signUpSchema, testsSchema } from "./schemas";

export const validateSignUp = (body: signUsers) => {
    const { error } = signUpSchema.validate(body);
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
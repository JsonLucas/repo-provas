import { signUsers } from "../types";
import { signUpSchema } from "./schemas";

export const validateSignUp = (body: signUsers) => {
    const { error } = signUpSchema.validate(body);
    if(error){ 
        return { status: false, error };
    }
    return { status: true };
}
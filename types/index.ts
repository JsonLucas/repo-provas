import { tests, users } from "@prisma/client"

export interface Error {
    code: number,
    error: string | undefined
    message? : string
}

interface AuxTypes {
    category?: string,
    teacher?: string,
    discipline?: string,
    confirmPassword?: string
}

export type signInUser = Omit<users, 'id'>;
export type signUpUser = Omit<users, 'id'> & Pick<AuxTypes, 'confirmPassword'>;
export type setTest = Omit<tests, 'id' | 'categoryId' | 'teacherDisciplineId'> 
& Pick<AuxTypes, 'category' | 'teacher' | 'discipline'>;
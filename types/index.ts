import { tests, users } from "@prisma/client"

export interface Error {
    code: number,
    error: string | undefined
    message? : string
}

interface AuxTypes {
    category?: string,
    teacher?: string,
    discipline?: string
}

export type signUsers = Omit<users, 'id'>;
export type setTest = Omit<tests, 'id' | 'categoryId' | 'teacherDisciplineId'> 
& Pick<AuxTypes, 'category' | 'teacher' | 'discipline'>;
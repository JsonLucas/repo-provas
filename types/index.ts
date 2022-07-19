import { users } from "@prisma/client"

export interface Error {
    code: number,
    error: string | undefined
    message? : string
}

export type signUsers = Omit<users, 'id'>;
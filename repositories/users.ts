import prisma from "../database";

interface signUser {
    email: string,
    password: string
}

export const insert = async (data: signUser) => {
    const { email, password } = data;
    return await prisma.users.create({ data: { email, password }});
} 

export const getByEmail = async (email: string) => {
    const user = await prisma.users.findUnique({
        where: { email }
    });
    return user;
}

export const getById = async (id: number) => {
    const user = await prisma.users.findUnique({
        where: { id }
    });
    return user;
}
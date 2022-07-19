import prisma from "../database";

export const getByName = async (name: string) => {
    return await prisma.teachers.findUnique({
        where:{ name }
    });
} 

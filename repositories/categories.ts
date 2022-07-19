import prisma from "../database";

export const getByName = async (name: string) => {
    return await prisma.categories.findUnique({
        where:{ name }
    });
} 
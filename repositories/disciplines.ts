import prisma from "../database";

export const getByName = async (name: string) => {
    return await prisma.disciplines.findUnique({
        where: { name }
    });
}

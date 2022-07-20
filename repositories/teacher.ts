import prisma from "../database";

export const getByName = async (name: string) => {
    return await prisma.teachers.findUnique({
        where:{ name }
    });
} 

export const getTeachersDisciplinesByTeacherName = async (name: string) => {
    const teachersDisciplines = await prisma.teachersDisciplines.findMany({
        where: {
            teacher: {
                name
            }
        },
        select: {
            id: true
        }
    });
    return teachersDisciplines;
}
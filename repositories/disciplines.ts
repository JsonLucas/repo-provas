import prisma from "../database";

export const getByName = async (name: string) => {
    return await prisma.disciplines.findUnique({
        where:{ name }
    });
} 

export const getTeachersDisciplines = async (teacherId: number, disciplineId: number) => {
    const teachersDisciplines = await prisma.teachersDisciplines.findFirst({
        where:{ teacherId, disciplineId }
    });
    return teachersDisciplines;
}
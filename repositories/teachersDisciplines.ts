import prisma from "../database"

export const getTeacherDiscipline = async (teacherId: number, disciplineId: number) => {
    const teacherDiscipline = await prisma.teachersDisciplines.findFirst({
        where:{ teacherId, disciplineId }
    });
    return teacherDiscipline;
}
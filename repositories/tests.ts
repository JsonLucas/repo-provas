import prisma from "../database";

interface InsertTest {
    name: string,
    pdfUrl: string,
    categoryId: number,
    teacherDisciplineId: number,
}

export const insert = async (data: InsertTest) => {
    const { name, pdfUrl, categoryId, teacherDisciplineId } = data;
    return await prisma.tests.create({
        data: { name, pdfUrl, categoryId, teacherDisciplineId }
    });
}

export const getTestsByTeacherDisciplineId = async (teacherDisciplineId: number) => {
    const tests = await prisma.tests.findMany({
        where: { teacherDisciplineId } 
    })
    return tests;
}
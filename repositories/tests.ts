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
    });
    return tests;
}

export const getTestsOrderedByTermId = async (teacherDisciplineId: number) => {
    const tests = await prisma.tests.findMany({
        where: { teacherDisciplineId },
        orderBy: {
            teachersDiscipline: {
                discipline: {
                    termId: 'asc'
                }
            }
        }
    });
    return tests;
}

export const getTestsByDisciplineName = async (name: string) => {
    const teachersDisciplines = await prisma.tests.findMany({
        where: {
            teachersDiscipline: {
                discipline: { name }
            }
        },
        select: {
            name: true,
            teachersDiscipline: {
                select: {
                    discipline: {
                        select: {
                            name: true,
                            term: {
                                select: { number: true }
                            }
                        }
                    },
                    teacher: {
                        select: { name: true }
                    }
                }
            },
            category: {
                select: { name: true }
            }
        }
    });
    return teachersDisciplines;
}

export const getTestsByTeacherName = async (name: string) => {
    const tests = await prisma.tests.findMany({
        where: {
            teachersDiscipline: {
                teacher: { name }
            }
        },
        select: {
            name: true,
            teachersDiscipline: {
                select: {
                    discipline: {
                        select: { name: true }
                    },
                    teacher: {
                        select: { name: true }
                    }
                }
            },
            category: {
                select: { name: true }
            }
        }
    });
    return tests;
}
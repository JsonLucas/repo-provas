import prisma from "../database";

const GENERIC_ID: number = 1;

const signUpSeed = async () => {
    const email = 'teste@email.com'
    const password = '123';
    await prisma.users.upsert({
        where: { email },
        update: {},
        create: { email, password }
    });
}

const categorySeed = async () => {
    const name = 'test_category';
    await prisma.categories.upsert({
        where: { name },
        update: {},
        create: { name }
    });
}

const teacherSeed = async () => {
    const name = 'test_teachers';
    await prisma.teachers.upsert({
        where: { name },
        update: {},
        create: { name }
    });
}

const termSeed = async () => {
    const number = 1;
    await prisma.terms.upsert({
        where: { number },
        update: {},
        create: { number }
    });
}

const disciplineSeed = async () => {
    const name = 'test_discipline';
    const termId = 1;
    await prisma.disciplines.upsert({
        where: { name },
        update: {},
        create: { name, termId }
    });
}

const teacherDisciplineSeed = async () => {
    await prisma.teachersDisciplines.create({
        data: { teacherId: GENERIC_ID, disciplineId: GENERIC_ID }
    });
}

const testSeed = async () => {
    const name = 'test-name';
    const pdfUrl = 'http://testlink.com';
    await prisma.tests.create({
        data: { name, pdfUrl, categoryId: GENERIC_ID, teacherDisciplineId: GENERIC_ID }
    });
}
const seeder = async () => {
    try {
        await signUpSeed();
        await categorySeed();
        await teacherSeed();
        await termSeed();
        await disciplineSeed();
        await teacherDisciplineSeed();
        await testSeed();
        await prisma.$disconnect();
    } catch (e: any) {
        console.log(e);
        process.exit(1);
    }
};

export default seeder;
import prisma from "../database";

const GENERIC_ID: number = 1;

beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE users;`;
    await prisma.$executeRaw`TRUNCATE TABLE categories;`;
    await prisma.$executeRaw`TRUNCATE TABLE teachers;`;
    await prisma.$executeRaw`TRUNCATE TABLE terms;`;
    await prisma.$executeRaw`TRUNCATE TABLE disciplines;`;
    await prisma.$executeRaw`TRUNCATE TABLE "teachersDisciplines";`;
    await prisma.$executeRaw`TRUNCATE TABLE tests;`;
});

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
    const name = 'test_teacher';
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

signUpSeed().catch(e => { console.log(e); process.exit(1); });

categorySeed().catch(e => { console.log(e); process.exit(); });

teacherSeed().catch(e => { console.log(e); process.exit(); });

termSeed().catch(e => { console.log(e); process.exit(); });

disciplineSeed().catch(e => { console.log(e); process.exit(); });

teacherDisciplineSeed().catch(e => { console.log(e); process.exit(); });

testSeed().catch(e => { console.log(e); process.exit(); });

(async () => { await prisma.$disconnect(); })();
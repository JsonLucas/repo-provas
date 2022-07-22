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
    await prisma.teachersDisciplines.upsert({
        where: { id: GENERIC_ID },
        update: {},
        create: { teacherId: GENERIC_ID, disciplineId: GENERIC_ID }
    });
}

const testSeed = async () => {
    const name = 'test-name';
    const pdfUrl = 'http://testlink.com';
    await prisma.tests.upsert({
        where: { id: GENERIC_ID },
        update: {},
        create: { name, pdfUrl, categoryId: GENERIC_ID, teacherDisciplineId: GENERIC_ID }
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
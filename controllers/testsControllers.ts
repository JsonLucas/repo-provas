import { Request, Response } from "express";
import teachersDisciplinesServices from "../services/teachersDisciplines";
import testsServices from "../services/tests";

export const setTestController = async (req: Request, res: Response) => {
    const { data } = res.locals;
    const { name, pdfUrl, category, discipline, teacher } = data;
    const teacherDiscipline = await teachersDisciplinesServices.getTeacherDiscipline(teacher, discipline);
    if (!teacherDiscipline) throw { code: 400, error: 'this teacher does not teach this subject.'};

    await testsServices.insert({ name, pdfUrl, categoryId: category, teacherDisciplineId: teacherDiscipline.id });
    res.sendStatus(201);
}

export const getTestsByDisciplineController = async (req: Request, res: Response) => {
    const { testsByDiscipline } = res.locals;
    res.status(200).send(testsByDiscipline);
}

export const getTestsByTeacherController = async (req: Request, res: Response) => {
    const { testsByTeacher } = res.locals;
    res.status(200).send(testsByTeacher);
}
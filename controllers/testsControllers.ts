import { Request, Response } from "express";
import disciplinesServices from "../services/disciplines";
import testsServices from "../services/tests";

export const setTestController = async (req: Request, res: Response) => {
    const { data } = res.locals;
    const { name, pdfUrl, category, discipline, teacher } = data;
    const teacherDiscipline = await disciplinesServices.getTeachersDisciplines(teacher, discipline);
    if (!teacherDiscipline) throw { code: 400, error: 'this teacher does not teach this subject.'};

    await testsServices.insert({ name, pdfUrl, categoryId: category, teacherDisciplineId: teacherDiscipline.id });
    res.sendStatus(201);
}
import { NextFunction, Request, Response } from "express";
import categoriesServices from "../services/categories";
import disciplinesServices from "../services/disciplines";
import teachersServices from "../services/teachers";

export const authSetTestDataMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { data } = res.locals;
    const discipline = await disciplinesServices.getByName(data.discipline);
    if(!discipline) throw { code: 404, error: `"${data.discipline}" not found.` };

    const teacher = await teachersServices.getByName(data.teacher);
    if(!teacher) throw { code: 404, error: `"${data.teacher}" not found.` };

    const category = await categoriesServices.getByName(data.category);
    if(!category) throw { code: 404, error: `"${data.category}" not found.` };

    res.locals.data = {...data, discipline: discipline.id, teacher: teacher.id, category: category.id};
    next();
}
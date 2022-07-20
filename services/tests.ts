import { 
    insert, 
    getTestsByTeacherDisciplineId, 
    getTestsByDisciplineName,
    getTestsByTeacherName
} from "../repositories/tests";

const testsServices = { 
    insert, 
    getTestsByTeacherDisciplineId, 
    getTestsByDisciplineName,
    getTestsByTeacherName
};

export default testsServices;
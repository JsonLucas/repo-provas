import { getByEmail, getById, insert } from "../repositories/users";

const usersServices = {
    insert,
    getByEmail, 
    getById
}

export default usersServices;
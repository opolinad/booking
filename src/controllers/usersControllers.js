import { Users } from "../models/Users.js";
export const getAllUsers = async () => {
    try {
        let users = await Users.findAll();
        return users;
    } catch (error) {
        console.error(error);
    }
}

export const createUser = async (createObj) => {
    try {
        let user = await Users.create(createObj);
        return user;
    } catch (error) {
        console.error(error);
    }
}

export const updateUser = async (id, updateObj) => {
    try {
        let user = await Users.update(updateObj, { where: {id} });
        return user;
    } catch (error) {
        console.error(error);
    }
}

export const deleteUser = async (id) => {
    try {
        return await Users.destroy({ where: {id} });
    } catch (error) {
        console.error(error);
    }
}

export const getUserById = async (id)=>{
    try {
        let user = await Users.findByPk(id);
        console.log("El usuario es", user)
        return user;
    } catch (error) {
        console.error(error);
    }
}
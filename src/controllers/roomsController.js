import { RoomsDetails } from "../models/RoomsDetails.js";

export const getAllRooms = async () => {
    try {
        let rooms = await RoomsDetails.findAll();
        return rooms;
    } catch (error) {
        console.error(error);
    }
}

export const createRoom = async (createObj) => {
    try {
        let room = await RoomsDetails.create(createObj);
        return room;
    } catch (error) {
        console.error(error);
    }
}

export const updateRoom = async (id, updateObj) => {
    try {
        let room = await RoomsDetails.update(updateObj, { where: {id} });
        return room;
    } catch (error) {
        console.error(error);
    }
}

export const deleteRoom = async (id) => {
    try {
        return await RoomsDetails.destroy({ where: {id} });
    } catch (error) {
        console.error(error);
    }
}

export const getRoomById = async (id)=>{
    try {
        let room = await RoomsDetails.findByPk(id);
        return room;
    } catch (error) {
        console.error(error);
    }
}

export const updateRoomStatus = async (id, status) => {
    try {
        let room = await RoomsDetails.update({available: status}, { where: {id} });
        return room;
    } catch (error) {
        console.error(error);
    }
}
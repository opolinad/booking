import { BookingsDetails } from "../models/BookingsDetails.js";

export const getAllBookings = async () => {
    try {
        let bookings = await BookingsDetails.findAll();
        return bookings;
    } catch (error) {
        console.error(error);
    }
}

export const createBooking = async (createObj) => {
    try {
        let booking = await BookingsDetails.create(createObj);
        return booking;
    } catch (error) {
        console.error(error);
    }
}

export const updateBooking = async (id, updateObj) => {
    try {
        let booking = await BookingsDetails.update(updateObj, { where: {id} });
        return booking;
    } catch (error) {
        console.error(error);
    }
}

export const deleteBooking = async (id) => {
    try {
        return await BookingsDetails.destroy({ where: {id} });
    } catch (error) {
        console.error(error);
    }
}

export const getBookingById = async (id)=>{
    try {
        let booking = await BookingsDetails.findByPk(id);
        return booking;
    } catch (error) {
        console.error(error);
    }
}

export const cancelBooking = async (id)=>{
    try {
        let booking = await BookingsDetails.update({active:false}, { where: {id} });
        return booking;
    } catch (error) {
        console.error(error);
    }
}

export const updateBookigStatus = async (id, status_id) => {
    try {
        let booking = await BookingsDetails.update({status_id}, { where: {id} });
        return booking;
    } catch (error) {
        console.error(error);
    }
}

export const getBookingsByUser = async (user_id) => {
    try {
        let booking = await BookingsDetails.findAll({ where: { user_id } });
        return booking;
    } catch (error) {
        console.error(error);
    }
}
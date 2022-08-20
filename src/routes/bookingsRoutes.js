import { Router } from "express";
import { getAllBookings, createBooking, updateBooking, deleteBooking, cancelBooking, getBookingById, updateBookigStatus, getBookingsByUser } from "../controllers/bookingsController.js";

const router = Router();

router.route("/:id")
    .put(async (req, res) => {
        const { bookingObj } = req.body;
        const {id}=req.params;
        let booking = await updateBooking(id, bookingObj);
        res.sendStatus(200);
    })
    .delete(async (req, res) => {
        const {id}=req.params;
        await deleteBooking(id);
        res.sendStatus(200);
    })
    .get( async (req, res) => {
        const {id}=req.params;
        let booking = await getBookingById(id);
        res.status(200).send(booking);
    });

router.route("/")
    .get(async (req, res) => {
        let bookings = await getAllBookings();
        res.status(200).send(bookings);
    })
    .post(async (req, res) => {
        const {bookingObj}=req.body;
        let booking = await createBooking(bookingObj);
        res.status(200).send(booking);
    })

router.put("/cancel/:id", async (req, res) => {
    const {id}=req.params;
    await cancelBooking(id);
    res.sendStatus(200);
});

router.put("/status/:id", async (req, res) => {
    const { id } = req.params;
    const { status_id } = req.body;
    if (status_id > 3 || status_id < 1) res.status(400).send("No existe el status");
    await updateBookigStatus(id, status_id);
    res.sendStatus(200);
});

router.get("/byUser/:userId", async (req, res) => {
    const { userId } = req.params;
    let bookings = await getBookingsByUser(userId);
    res.status(200).send(bookings);
});

export default router;
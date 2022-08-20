import { Router } from "express";
import { getAllRooms, createRoom, deleteRoom, getRoomById, updateRoom, updateRoomStatus } from "../controllers/roomsController.js";

const router = Router();

router.route("/:id")
    .put(async (req, res) => {
        const { roomObj } = req.body;
        const {id}=req.params;
        let room = await updateRoom(id, roomObj);
        res.sendStatus(200);
    })
    .delete(async (req, res) => {
        const {id}=req.params;
        await deleteRoom(id);
        res.sendStatus(200);
    })
    .get( async (req, res) => {
        const {id}=req.params;
        let room = await getRoomById(id);
        res.status(200).send(room);
    });

router.route("/")
    .get(async (req, res) => {
        let rooms = await getAllRooms();
        res.status(200).send(rooms);
    })
    .post(async (req, res) => {
        const {roomObj}=req.body;
        let room = await createRoom(roomObj);
        res.status(200).send(room);
    })

router.put("/status/:id", async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    let room = await updateRoomStatus(id, status);
    res.sendStatus(200);
});

export default router;
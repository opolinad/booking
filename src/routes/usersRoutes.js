import { Router } from "express";
import { getAllUsers, createUser, deleteUser, getUserById, updateUser } from "../controllers/usersControllers.js";

const router = Router();

router.route("/:id")
    .put(async (req, res) => {
        const { userObj } = req.body;
        const {id}=req.params;
        let user = await updateUser(id, userObj);
        res.sendStatus(200);
    })
    .delete(async (req, res) => {
        const {id}=req.params;
        await deleteUser(id);
        res.sendStatus(200);
    })
    .get( async (req, res) => {
        const {id}=req.params;
        let user = await getUserById(id);
        res.status(200).send(user);
    });

router.route("/")
    .get(async (req, res) => {
        let users = await getAllUsers();
        res.status(200).send(users);
    })
    .post(async (req, res) => {
        const {userObj}=req.body;
        let user = await createUser(userObj);
        res.status(200).send(user);
    })

export default router;
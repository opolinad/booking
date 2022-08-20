import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import bookingsRoutes from "./routes/bookingsRoutes.js";
import roomsRoutes from "./routes/roomsRoutes.js";
import usersRoutes from "./routes/usersRoutes.js";

const server = express();

server.use(cors());
server.use(bodyParser.json({ limit: '50mb' }));
server.use("/bookings", bookingsRoutes);
server.use("/rooms", roomsRoutes);
server.use("/users", usersRoutes);

export default server;
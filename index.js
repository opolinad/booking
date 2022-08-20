import server from "./src/app.js";
import { sequelize as conn } from "./src/utils/db.js";
import dotenv from "dotenv";

dotenv.config();

conn.sync().then(() => {
    server.listen(process.env.PORT, () => {
        console.log(`Listening at port: ${process.env.PORT}`);
    });
});

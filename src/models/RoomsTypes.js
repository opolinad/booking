import { DataTypes } from "sequelize";
import { sequelize } from "../utils/db.js";

export const RoomsTypes = sequelize.define('rooms_types', {
    type: {
        type: DataTypes.STRING,
        allowNull: false
    }
});
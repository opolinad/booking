import { DataTypes } from "sequelize";
import { sequelize } from "../utils/db.js";

export const IdentificationTypes = sequelize.define('identification_types', {
    type: {
        type: DataTypes.STRING,
        allowNull: false
    }
});
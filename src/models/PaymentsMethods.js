import { DataTypes } from "sequelize";
import { sequelize } from "../utils/db.js";

export const PaymentsMethods = sequelize.define('payments_metods', {
    method: {
        type: DataTypes.STRING,
        allowNull: false
    }
});
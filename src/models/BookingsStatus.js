import { DataTypes } from "sequelize";
import { sequelize } from "../utils/db.js";

export const BookingsStatus = sequelize.define('bookings_status', {
    status: {
        type: DataTypes.ENUM('Pendiente', 'Pagado', 'Eliminado'),
        allowNull: false
    }
});
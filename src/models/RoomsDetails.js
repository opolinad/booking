import { DataTypes } from "sequelize";
import { RoomsTypes } from "./RoomsTypes.js";
import { sequelize } from "../utils/db.js";

export const RoomsDetails = sequelize.define('rooms_details', {
    room_type_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: RoomsTypes,
            key:'id'
        }
    },
    area: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    shared_bathroom: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    qty_bathrooms: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    other_amenities: {
        type: DataTypes.STRING,
        allowNull: true
    },
    available: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    }
});
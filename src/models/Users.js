import { DataTypes } from "sequelize";
import { sequelize } from "../utils/db.js";
import { IdentificationTypes } from "./IdentificationTypes.js";

export const Users = sequelize.define('users', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    identification_type_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: IdentificationTypes,
            key: "id"
        }
    },
    identification_number: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});
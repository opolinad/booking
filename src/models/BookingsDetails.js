import { DataTypes } from "sequelize";
import { sequelize } from "../utils/db.js";
import { Users } from "./Users.js";
import { BookingsStatus } from "./BookingsStatus.js";
import { PaymentsMethods } from "./PaymentsMethods.js";


export const BookingsDetails = sequelize.define('bookings_details', {
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Users,
            key: "id"
        }
    },
    room_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Users,
            key: "id"
        }
    },
    status_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: BookingsStatus,
            key: "id"
        }
    },
    payed_amount: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    payment_method: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: PaymentsMethods,
            key: "id"
        }
    },
    user_id_billing: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Users,
            key: "id"
        }
    },
    date_start: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    date_end: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    qty_people: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    special_requirements: {
        type: DataTypes.STRING,
        allowNull: true
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    }
});
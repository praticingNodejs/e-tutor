import { connection, Sequelize } from './index.js';

const USER_TABLE = 'users';

const User = connection.define(
    USER_TABLE,
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            field: 'id',
        },
        email: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false,
            field: 'email',
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
            field: 'password',
        },
        phone: {
            type: Sequelize.STRING,
            field: 'phone',
        },
        address: {
            type: Sequelize.STRING,
            field: 'address',
        },
        createdAt: {
            type: Sequelize.DATE,
            defaultValue: Date.now(),
            field: 'created_at',
        },
        updatedAt: {
            type: Sequelize.DATE,
            defaultValue: Date.now(),
            field: 'updated_at',
        },
    },
    {
        timestamps: false,
    },
);

export default User;

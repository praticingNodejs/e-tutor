import bcrypt from 'bcryptjs';
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
        role: {
            type: Sequelize.STRING,
            defaultValue: 'user',
            field: 'role',
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

User.prototype.comparePassword = function comparePassword(userPassword) {
    return bcrypt.compareSync(userPassword, this.password);
};

export default User;

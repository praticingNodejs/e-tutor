import Sequelize from 'sequelize';

import dbConfig from '../config/db.config.js';

const connection = new Sequelize(
    dbConfig.DATABASE,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        // logging: process.env.NODE_ENV === 'development',
        dialect: dbConfig.DIALECT,
        pool: {
            ...dbConfig.POOL,
        },
        define: {
            underscored: true,
            freezeTableName: true,
            charset: 'utf8',
        },
    },
);

export { connection, Sequelize };

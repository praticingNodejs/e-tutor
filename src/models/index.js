import Sequelize from 'sequelize';

import dbConfig from '../config/db.config.js';

const connection = new Sequelize(
    dbConfig.DATABASE,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.DIALECT,
        pool: {
            ...dbConfig.POOL,
        },
    },
);

export { connection, Sequelize };

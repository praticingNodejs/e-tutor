import Sequelize from 'sequelize';
import { fileURLToPath } from 'url';

import dbConfig from '../config/db.config.js';
import Logger from '../libs/logger.js';

const logger = new Logger({
    file: fileURLToPath(import.meta.url),
});

const connection = new Sequelize(
    dbConfig.DATABASE,
    dbConfig.USERNAME,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        logging: process.env.NODE_ENV === 'development' && logger.info,
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

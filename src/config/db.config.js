const dbConfig = {
    HOST: process.env.HOST,
    DATABASE: process.env.DATABASE,
    USERNAME: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    DIALECT: process.env.DIALECT, // mysql, sqlite, sql
    POOL: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};

export default dbConfig;

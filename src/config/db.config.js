const dbConfig = {
    HOST: 'localhost',
    DATABASE: 'e_tutor',
    USER: 'postgres',
    PASSWORD: 'duction001',
    DIALECT: 'postgres', // mysql, sqlite, sql
    POOL: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};

export default dbConfig;

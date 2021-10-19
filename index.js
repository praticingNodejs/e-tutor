import './.env.js';
import Logger from './src/libs/logger.js';
import app from './src/app.js';

const logger = new Logger({
    file: 'App',
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    logger.success(`App running at http://localhost:${PORT}`);
});

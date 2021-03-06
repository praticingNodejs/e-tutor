import { fileURLToPath } from 'url';
import eTutorResponse from '../utils/commonResponse.js';
import { NOT_FOUND } from '../utils/commonCode.js';
import Logger from '../libs/logger.js';

const logger = new Logger({ file: fileURLToPath(import.meta.url) });

export const notFound = (_req, res) => eTutorResponse(res, NOT_FOUND);

export const errorHandler = (err, _req, res, _next) => {
    logger.error(err.message);

    return eTutorResponse(res, {
        statusCode: err.status || 500,
        code: 'INTERNAL_SERVER',
        message: err.message,
    });
};

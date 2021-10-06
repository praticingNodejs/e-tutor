import eTutorResponse from '../utils/commonResponse.js';
import { NOT_FOUND } from '../utils/errorCodes.js';

export const notFound = (_req, res) => eTutorResponse(res, NOT_FOUND);

export const errorHandler = (err, _req, res, _next) =>
    eTutorResponse(res, {
        statusCode: err.status || 500,
        code: 'INTERNAL_SERVER',
        message: err.message,
    });

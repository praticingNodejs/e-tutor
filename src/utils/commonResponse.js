const eTutorResponse = (res, { statusCode, code, message }, data = {}) =>
    res.status(statusCode).send({
        statusCode,
        code,
        message,
        data,
    });

export default eTutorResponse;

export const notFound = (_req, res) =>
    res.status(404).send({
        statusCode: 404,
        message: 'Url not found',
        data: {},
    });

export const errorHandler = (err, req, res, _next) => {
    req.locals.message = err.message;
    res.locals.errors = err;

    return res.status(err.status || 500).send({
        statusCode: err.statusCode || 500,
        message: err.stack,
        data: {},
    });
};

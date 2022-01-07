import eTutorResponse from './commonResponse.js';

const asyncRouter =
    (fn, option = true) =>
    (req, res, next) =>
        Promise.resolve(fn(req, res, next))
            .then(
                (result) =>
                    option &&
                    result &&
                    eTutorResponse(res, result.message, result.data),
            )
            .catch(next);

export default asyncRouter;

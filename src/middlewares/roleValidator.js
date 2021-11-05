import { FORBIDDEN } from '../utils/commonCode.js';
import eTutorResponse from '../utils/commonResponse.js';

const roleValidator = (role) => (req, res, next) =>
    req.user.role !== role ? eTutorResponse(res, FORBIDDEN) : next();

export default roleValidator;

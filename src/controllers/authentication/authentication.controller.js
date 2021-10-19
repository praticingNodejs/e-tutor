import {
    loginValidator,
    registerValidator,
} from './authentication.validator.js';
import { createUserService } from '../users/user.service.js';
import eTutorResponse from '../../utils/commonResponse.js';
import loginService from './authentication.service.js';

export const register = async (req, res) => {
    const validator = registerValidator(req.body);

    if (validator) {
        return eTutorResponse(res, validator);
    }

    const { message, data } = await createUserService(req.body);

    return eTutorResponse(res, message, data);
};

export const login = async (req, res) => {
    const validator = loginValidator(req.body);

    if (validator) {
        return eTutorResponse(res, validator);
    }

    const { message, data } = await loginService(req.body);

    return eTutorResponse(res, message, data);
};

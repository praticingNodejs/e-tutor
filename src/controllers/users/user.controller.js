import eTutorResponse from '../../utils/commonResponse.js';
import {
    createUserService,
    getUserById,
    listUserService,
    patchUserService,
} from './user.service.js';

export const listUser = async (req, res) => {
    const { message, data } = await listUserService(req.query);

    return eTutorResponse(res, message, data);
};

export const getUser = async (req, res) => {
    const { message, data } = await getUserById(req.params.id);

    return eTutorResponse(res, message, data);
};

export const createUser = async (req, res) => {
    const { message, data } = await createUserService(req.body);

    return eTutorResponse(res, message, data);
};

export const patchUser = async (req, res) => {
    const { message, data } = await patchUserService(req.params.id, req.body);

    return eTutorResponse(res, message, data);
};

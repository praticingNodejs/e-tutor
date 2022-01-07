import eTutorResponse from '../../utils/commonResponse.js';
import {
    createUserService,
    getUserById,
    listUserService,
    patchUserService,
    uploadAvatarService,
} from './user.service.js';

export const listUser = async (req) => listUserService(req.query);

export const getUser = async (req) => getUserById(req.params.id);

export const createUser = async (req) => createUserService(req.body);

export const patchUser = async (req) =>
    patchUserService(req.params.id, req.body);

export const uploadAvatar = async (req, res) => {
    const { message, data } = await uploadAvatarService(
        req.params.id,
        req.body,
    );

    console.log(req.file);

    return eTutorResponse(res, message, data);
};

import bcrypt from 'bcryptjs';
import User from '../../models/user.model.js';
import {
    CREATE_USER_SUCCESS,
    GET_USER_SUCCESS,
    LIST_USER_SUCCESS,
    UPDATE_USER_SUCCESS,
    USER_EXISTED,
    USER_ID_INVALID,
    USER_NOT_FOUND,
} from '../../utils/codeResponse.js';
import parseIntString from '../../utils/parsing.js';
import {
    DEFAULT_LIMIT,
    DEFAULT_OFFSET,
    GET_USERS_NESTED_FIELD,
    LIST_USERS_NESTED_FIELD,
} from './user.constant.js';
import { queryBuilder, updateUserData } from './user.validator.js';

export const listUserService = async (query) => {
    const { limit, offset } = query;

    const parseIntLimit = parseIntString(limit) || DEFAULT_LIMIT;
    const parseIntOffset = parseIntString(offset) || DEFAULT_OFFSET;

    const { count, rows: users } = await User.findAndCountAll({
        where: queryBuilder(query),
        attributes: LIST_USERS_NESTED_FIELD, // -> select field
        limit: parseIntLimit,
        offset: parseIntOffset,
    });

    return {
        message: LIST_USER_SUCCESS,
        data: {
            total: count,
            limit: parseIntLimit,
            offset: parseIntOffset,
            data: users,
        },
    };
};

export const getUserById = async (id) => {
    const userId = parseIntString(id);
    if (!userId) {
        return {
            message: USER_ID_INVALID,
        };
    }

    const user = await User.findOne({
        where: {
            id: userId,
        },
        attributes: GET_USERS_NESTED_FIELD,
    });
    if (!user) {
        return {
            message: USER_NOT_FOUND,
        };
    }

    return {
        message: GET_USER_SUCCESS,
        data: user,
    };
};

export const createUserService = async (data) => {
    const { email, password, phone, address } = data;

    const user = await User.findOne({
        where: {
            email,
        },
    });
    if (user) {
        return {
            message: USER_EXISTED,
        };
    }

    const salt = bcrypt.genSaltSync(10);
    const newUser = await User.create({
        email,
        password: bcrypt.hashSync(password, salt),
        phone,
        address,
    });

    const { data: createdUser } = await getUserById(newUser.id);
    return {
        message: CREATE_USER_SUCCESS,
        data: createdUser,
    };
};

export const patchUserService = async (userId, data) => {
    const user = await getUserById(userId);
    if (!user.data) {
        return {
            message: user.message,
        };
    }

    const allowUpdateData = updateUserData(data);
    await User.update(allowUpdateData, {
        where: {
            id: user.data.id,
        },
    });

    const { data: updatedUser } = await getUserById(userId);

    return {
        message: UPDATE_USER_SUCCESS,
        data: updatedUser,
    };
};

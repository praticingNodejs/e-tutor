import User from '../../models/user.model.js';
import eTutorResponse from '../../utils/commonResponse.js';
import {
    CREATE_USER_SUCCESS,
    LIST_USER_SUCCESS,
    USER_EXISTED,
} from '../../utils/errorCodes.js';
import parseIntString from '../../utils/parsing.js';
import {
    DEFAULT_LIMIT,
    DEFAULT_OFFSET,
    LIST_USERS_NESTED_FIELD,
} from './user.constant.js';
import queryBuilder from './user.validator.js';

export const listUser = async (req, res) => {
    const { limit = DEFAULT_LIMIT, offset = DEFAULT_OFFSET } = req.query;

    const parseIntLimit = parseIntString(limit);
    const parseIntOffset = parseIntString(offset);

    const { count, rows: users } = await User.findAndCountAll({
        where: queryBuilder(req.query),
        attributes: LIST_USERS_NESTED_FIELD, // -> select field
        limit: parseIntLimit,
        offset: parseIntOffset,
    });

    return eTutorResponse(res, LIST_USER_SUCCESS, {
        total: count,
        limit: parseIntLimit,
        offset: parseIntOffset,
        data: users,
    });
};

export const createUser = async (req, res) => {
    const { email, password, phone, address } = req.body;

    const user = await User.findOne({
        where: {
            email,
        },
    });
    if (user) {
        return eTutorResponse(res, USER_EXISTED);
    }

    const newUser = await User.create({
        email,
        password,
        phone,
        address,
    });

    return eTutorResponse(res, CREATE_USER_SUCCESS, newUser);
};

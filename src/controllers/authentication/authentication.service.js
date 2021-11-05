import { fileURLToPath } from 'url';
import User from '../../models/user.model.js';

import { USER_NOT_FOUND } from '../users/user.code.js';
import { generateToken } from '../../utils/token.js';

import { LOGIN_SUCCESSFUL } from './authentication.code.js';

import Logger from '../../libs/logger.js';

const logger = new Logger({
    file: fileURLToPath(import.meta.url),
});

const loginService = async ({ email, password }) => {
    const user = await User.findOne({
        where: {
            email,
        },
    });
    if (!user) {
        logger.warn(`Someone (email: ${email}) is trying to reach server`);
        return {
            message: USER_NOT_FOUND,
        };
    }

    const isValidatePassword = user.comparePassword(password);
    if (!isValidatePassword) {
        logger.warn(`Someone (email: ${email}) is trying to reach server`);
        return {
            message: USER_NOT_FOUND,
        };
    }

    logger.success(`User: [${user.email}] has logged in successful!`);

    return {
        message: LOGIN_SUCCESSFUL,
        data: {
            user,
            accessToken: generateToken(user.id),
        },
    };
};

export default loginService;

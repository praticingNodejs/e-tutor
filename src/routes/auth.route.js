import { Router } from 'express';

import asyncRouter from '../utils/asyncRouter.js';
import {
    login,
    register,
} from '../controllers/authentication/authentication.controller.js';

const router = Router();

export default (app) => {
    app.use('/auth', router);

    router.post('/register', asyncRouter(register));

    router.post('/login', asyncRouter(login));
};

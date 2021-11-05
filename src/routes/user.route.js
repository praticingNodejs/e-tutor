import { Router } from 'express';
import {
    createUser,
    getUser,
    listUser,
    patchUser,
} from '../controllers/users/user.controller.js';
import authorization from '../middlewares/authorization.js';
import asyncRouter from '../utils/asyncRouter.js';

const router = Router();

export default (app) => {
    app.use('/users', asyncRouter(authorization), router);

    router.get('/', asyncRouter(listUser));
    router.get('/:id', asyncRouter(getUser));
    router.post('/', asyncRouter(createUser));
    router.patch('/:id', asyncRouter(patchUser));
    router.delete('/', (req, res) => res.send('users success'));
};

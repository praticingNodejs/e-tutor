import { Router } from 'express';
import {
    createUser,
    getUser,
    listUser,
    patchUser,
} from '../controllers/users/user.controller.js';
import authorization from '../middlewares/authorization.js';
import asyncRouter from '../utils/asyncRouter.js';
import roleValidator from '../middlewares/roleValidator.js';

const router = Router();

export default (app) => {
    app.use('/users', asyncRouter(authorization), router);

    router.get('/', roleValidator('admin'), asyncRouter(listUser));
    router.get('/:id', roleValidator('admin'), asyncRouter(getUser));
    router.post('/', asyncRouter(createUser));
    router.patch('/:id', asyncRouter(patchUser));
    router.delete('/', (req, res) => res.send('users success'));
};

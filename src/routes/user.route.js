import { Router } from 'express';
import { createUser } from '../controllers/users/user.controller.js';

const router = Router();

export default (app) => {
    app.use('/users', router);

    /**
     * 1. GET LIST
     * 2. GET UNIQUE BY ID
     * 3. CREATE
     * 4. UPDATE
     * 5. DELETE
     */

    router.get('/', (req, res) => res.send('users success'));

    router.get('/:id', (req, res) => res.send('users success'));

    router.post('/', createUser);

    router.patch('/', (req, res) => res.send('users success'));

    router.delete('/', (req, res) => res.send('users success'));
};

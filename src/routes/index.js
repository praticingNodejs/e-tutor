import User from '../models/user.model.js';

export default (app) => {
    app.get('/', (_, res) => res.send('Hello'));

    app.get('/users', async (req, res) => {
        const users = await User.findAll({});

        res.send(users);
    });
};

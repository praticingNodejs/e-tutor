import userRoute from './user.route.js';

export default (app) => {
    app.get('/', (_, res) => res.send('Hello'));

    userRoute(app);
};

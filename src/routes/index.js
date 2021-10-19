import authRoute from './auth.route.js';
import userRoute from './user.route.js';

export default (app) => {
    app.get('/', (_, res) => res.send('Hello'));

    authRoute(app);

    userRoute(app);
};

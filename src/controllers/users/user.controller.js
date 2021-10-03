import User from '../../models/user.model.js';

export const listUser = async (req, res) => {};

export const createUser = async (req, res) => {
    const { email, password, phone, address } = req.body;

    try {
        const user = await User.findOne({
            where: {
                email,
            },
        });
        if (user) {
            return res.status(400).send({
                statusCode: 400,
                message: 'USER_EXISTED',
                data: {},
            });
        }

        const newUser = await User.create({
            email,
            password,
            phone,
            address,
        });

        return res.status(201).send({
            statusCode: 201,
            message: 'CREATE_USER_SUCCESS',
            data: newUser,
        });
    } catch (err) {
        console.log(err);

        return res.status(500).send({ err });
    }
};

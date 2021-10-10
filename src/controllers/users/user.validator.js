import Sequelize from 'sequelize';

const { Op } = Sequelize;

export const queryBuilder = (query) => {
    const where = {};

    if (query.email) {
        where.email = {
            [Op.iLike]: `%${query.email}%`,
        };
    }

    return where;
};

export const updateUserData = (data) => ({
    address: data.address,
    phone: data.phone,
});

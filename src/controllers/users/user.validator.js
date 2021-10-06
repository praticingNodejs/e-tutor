const queryBuilder = (query) => {
    const where = {};

    if (query.email) {
        where.email = {
            $iLike: `%${query.email}%`,
        };
    }

    return where;
};

export default queryBuilder;

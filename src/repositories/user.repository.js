const {User} = require("../models");

const createUser = async (userData) => {
    return User.create(userData);
};

const findUserByEmail = async (email) => {
    return User.findOne({ where: { email } });
};

const findUserById = async (id) => {
    return User.findByPk(id);
};

module.exports = {
    createUser,
    findUserByEmail,
    findUserById,
};
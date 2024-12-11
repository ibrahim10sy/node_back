const {User,Role,Magasin} = require('../models')

const createUser = async (userData) => {
    return await User.create(userData, {include : ['role']});
}

const getAllUsers = async () => {
    return await User.findAll();
}

const getUserById = async (id) => {
    const u = await User.findByPk(id);
    return u;
}

const updateUser = async(user,id) => {
    const u = await User.findByPk(id);

    if(!u){
        throw new Error('Aucun user trouvé');
    }

    return u.update(user);
}

const deleteUser = async (id) => {
    const u = await User.findByPk(id);

    if (!u) {
        throw new Error("User non trouvé");
    }

    await u.destroy();
    return "Supprimé avec succès";
};


module.exports = {createUser, getAllUsers,getUserById, deleteUser,updateUser}
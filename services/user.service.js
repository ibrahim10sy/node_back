const {User} = require('../models')

const createUser = async (userData) => {
    const newUser =  await User.create(userData);
    return newUser;
}

const getAllUsers = async () => {
    return await User.findAll();
};

 const getUserByEmail = async (email) => {
    return await User.findOne({where : {email}});
}

const getUserById = async (id) => {
    const u = await User.findByPk(id);
    if(!u){
        throw new Error('Aucun user trouvé');
    }
    return u;
}

const updateUser = async(user,idUser) => {
    const u = await User.findByPk(idUser);

    if(!u){
        throw new Error('Aucun user trouvé');
    }

    return u.update({user}, {where : {idUser : idUser}});
}

const deleteUser = async (idUser) => {
    const u = await User.findByPk(idUser);

    if (!u) {
        throw new Error("User non trouvé");
    }

    await u.destroy({
        where: { idUser: idUser },
      });
    return "Supprimé avec succès";
};


module.exports = {createUser, getAllUsers,getUserById, deleteUser,updateUser}
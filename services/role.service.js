const  { Role }= require('../models')

const createRole = async (role) => {
    return  Role.create(role);
};

const getRole = async () => {
    return Role.findAll();
}

const getRoleById = async (id) => {
   const r =  Role.findByPk(id);
   if(!r){
    throw new Error("Aucun rôle trouvé");
   }
    return r;
}

const updateRole = async (role,id) => {
    const existeRole = await Role.findByPk(id);

    if(!existeRole){
        throw new Error('Aucun rôle trouvé');
    }

    return existeRole.update(role);
}

const deleteRole = async(id) => {
    const role = await Role.findByPk(id);

    if(!role){
        throw new Error("Aucun rôle trouvé");
    }

    await role.destroy();
    return "Supprimé avec succès";
}


module.exports = {createRole, getRole,getRoleById, updateRole,deleteRole}
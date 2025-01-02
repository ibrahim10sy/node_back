const  { Role }= require('../models')

const createRole = async (roleData) => {
    const { libelle, description } = roleData;

    // Vérification avant d'essayer de créer un rôle
    if (!libelle || !description) {
        throw new Error("Libelle and description are required");
    }

    const newRole = await Role.create(roleData);
    return newRole;
};


const getRole = async () => {
    return await Role.findAll();
}

const getRoleById = async (idRole) => {
   const r =  Role.findByPk(idRole);
   if(!r){
    throw new Error("Aucun rôle trouvé");
   }
    return r;
}

const updateRole = async (role,idRole) => {
    const existeRole = await Role.findByPk(idRole);

    if(!existeRole){
        throw new Error('Aucun rôle trouvé');
    }

    return existeRole.update({role}, {where : {idRole : idRole}});
}

const deleteRole = async(idRole) => {
    const role = await Role.findByPk(idRole);

    if(!role){
        throw new Error("Aucun rôle trouvé");
    }

    await role.destroy({
        where: { idRole: idRole },
      });
    return "Supprimé avec succès";
}


module.exports = {createRole, getRole,getRoleById, updateRole,deleteRole}
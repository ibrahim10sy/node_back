const { where } = require('sequelize');
const  Magasin = require('../models/magasin.model');

const createMagasin = async (mag) => {
    const newMag = await Magasin.create(mag);
    return newMag;
}

const getMagasin = async () => {
    return Magasin.findAll();
}

const getMagasinById = async (idMagasin) => {
    const m = Magasin.findByPk(idMagasin);
    if(!m){
        throw new Error("Aucun magasin trouvé");
       }
    return m;
}

const updateMagasin = async (mag, idMagasin) => {
    const m = await Magasin.findByPk(id);

    if(!m){
        throw new Error('Aucun magasin trouvé');
    }

    return m.update({mag}, {where : {idMagasin : idMagasin}});
}

const deleteMagasin = async (idMagasin) => {
    const m = await Magasin.findByPk(idMagasin);

    if(!m){
        throw new Error("Aucun magasin trouvé");
    }

    await m.destroy({
        where: { idMagasin: idMagasin },
      });

    return "Supprimé avec succèss";
}

module.exports = {createMagasin, getMagasin, getMagasinById, updateMagasin, deleteMagasin}
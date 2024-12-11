const  {Magasin} = require('../models');

const createMagasin = async (mag) => {
    return Magasin.create(mag);
}

const getMagasin = async () => {
    return Magasin.findAll();
}

const getMagasinById = async (id) => {
    const m = Magasin.findByPk(id);
    if(!m){
        throw new Error("Aucun magasin trouvé");
       }
    return m;
}

const updateMagasin = async (mag, id) => {
    const m = await Magasin.findByPk(id);

    if(!m){
        throw new Error('Aucun magasin trouvé');
    }

    return m.update(mag);
}

const deleteMagasin = async (id) => {
    const m = await Magasin.findByPk(id);

    if(!m){
        throw new Error("Aucun magasin trouvé");
    }

    await m.destroy();

    return "Supprimé avec succèss";
}

module.exports = {createMagasin, getMagasin, getMagasinById, updateMagasin, deleteMagasin}
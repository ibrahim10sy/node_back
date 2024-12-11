const sequelize = require('../config/db.config');
const User = require('./user.model')
const Role = require('./role.model')
const Magasin = require('./magasin.model')

const intitDB = async () => {
    try {
        await sequelize.sync({ alter: true }); // Remplace par `{ alter: true }` en prod
        console.log('Base de données synchronisée');
    } catch (error) {
        console.error('Erreur lors de la synchronisation : ', error);
    }
}

module.exports = {sequelize,User,Role,Magasin,intitDB};

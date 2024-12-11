const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

// Charger les variables d'environnement depuis le fichier `.env`
dotenv.config();

// Créer une nouvelle instance de Sequelize
const sequelize = new Sequelize(
    process.env.DB_NAME, // Nom de la base de données
    process.env.DB_USER, // Nom de l'utilisateur
    process.env.DB_PASSWORD, // Mot de passe
    {
        host: process.env.DB_HOST, // Hôte (par ex. localhost)
        dialect: 'mysql', // Spécifier explicitement le dialecte
        // logging: true, // Désactiver les logs SQL (facultatif)
    }
);

module.exports = sequelize;

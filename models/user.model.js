/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - username
 *         - password
 *         - email
 *         - adresse
 *         - pays
 *         - roleId
 *       properties:
 *         idUser:
 *           type: integer
 *           description: ID unique de l'utilisateur
 *         username:
 *           type: string
 *           description: Nom d'utilisateur
 *         password:
 *           type: string
 *           description: Mot de passe de l'utilisateur
 *         email:
 *           type: string
 *           description: Email de l'utilisateur
 *         adresse:
 *           type: string
 *           description: Adresse de l'utilisateur
 *         pays:
 *           type: string
 *           description: Pays de l'utilisateur
 *         roleId:
 *           type: integer
 *           description: ID du rôle associé à l'utilisateur
 *       example:
 *         username: 'john_doe'
 *         password: 'password123'
 *         email: 'john.doe@example.com'
 *         adresse: '123 Rue Exemple'
 *         pays: 'France'
 *         roleId: 1
 */

/**
 * @swagger
 * tags:
 *   - name: User
 *     description: Opérations sur les utilisateurs
 */

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config')
const Role = require('./role.model')
const Magasin = require('../models/magasin.model')

const User = sequelize.define('User', {
    idUser: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIcrement: true
    },
    username: {
        type:  DataTypes.STRING,
        allowNull: false,
        
    },
    password: {
        type:  DataTypes.STRING,
        allowNull: false,
        unique: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
    adresse: {
        type:  DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    pays: {
        type:  DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    roleId: {
        type: DataTypes.INTEGER,
        references: {
            model: Role,
            key: 'idRole'
        }
    },
});

// Relations
// User.belongsTo(Role, { foreignKey: 'roleId', as: 'role' });
// User.belongsToMany(Magasin, { through: 'UserMagasins', as: 'magasins' });

module.exports = User;
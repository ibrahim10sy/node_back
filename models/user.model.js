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

const User = sequelize.define('User', {
    idUser: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING(30), allowNull: false
        
    },
    password: {
        type: DataTypes.STRING(30), allowNull: false
    },
    email: {
        type: DataTypes.STRING(30), allowNull: false,
        validate: {
          isEmail: true,
        },
      },
    adresse: {
        type: DataTypes.STRING(30), allowNull: false
    },
    pays: {
        type: DataTypes.STRING(30), allowNull: false
    },
    roleId: {
        type: DataTypes.INTEGER,
        references: {
            model: Role,
            key: 'idRole'
        }
    },
});

module.exports = User;
/**
 * @swagger
 * components:
 *   schemas:
 *     Role:
 *       type: object
 *       required:
 *         - idRole
 *         - libelle
 *         - description
 *       properties:
 *         idRole:
 *           type: integer
 *           description: ID unique du rôle
 *         libelle:
 *           type: string
 *           description: Libellé du rôle
 *         description:
 *           type: string
 *           description: Description du rôle
 *       example:
 *         idRole: 1
 *         libelle: 'Admin'
 *         description: 'Rôle avec tous les privilèges'
 */

/**
 * @swagger
 * tags:
 *   - name: Role
 *     description: Opérations sur les rôles
 */

const  {DataTypes} = require('sequelize');
const sequelize = require('../config/db.config');

const Role = sequelize.define('Role',{
    idRole: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    libelle : {
        type: DataTypes.STRING(30), allowNull: true
    }, 
    description : {
        type: DataTypes.STRING(30), allowNull: true
    }, 
});
 
module.exports = Role;
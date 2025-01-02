/**
 * @swagger
 * components:
 *   schemas:
 *     Magasin:
 *       type: object
 *       required:
 *         - nomMagasin
 *         - localisation
 *       properties:
 *         nomMagasin :
 *           type: string
 *           description: nom du magasin
 *         localisation:
 *           type: string
 *           description: localisation du magasin
 *       example:
 *         nomMagasin: 'Magasin 1'
 *         localisation: 'Localisation du magasin'
 */

/**
 * @swagger
 * tags:
 *   - nomMagasin: Magasin 1
 *     localisation: Tanzania
 */

const  {DataTypes} = require('sequelize');
const sequelize = require('../config/db.config');

const Magasin = sequelize.define('Magasin', {
    idMagasin: {
        type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nomMagasin : {
        type: DataTypes.STRING(30), allowNull: false
    },
    localisation : {
        type: DataTypes.STRING(30), allowNull: false
    }
});
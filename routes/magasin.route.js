const express = require('express');
const magCon = require('../controller/magasin.controller')

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Magasin
 *   description: Magasin management API
 */


/**
 * @swagger
 * /api/magasin/getAllMagasin:
 *   get:
 *     summary: Retrieve all magasin
 *     tags: [Magasin]
 *     responses:
 *       200:
 *         description: A list of magasins.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Magasin'
 */
router.get('/magasin/getAllMagasin', magCon.getAllMagasin);


/**
 * @swagger
 * /api/magasin/create:
 *   post:
 *     summary: Add a new magasin
 *     tags: [Magasin]
 *     responses:
 *       200:
 *         description: Add a new magasins.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Magasin'
 */
router.post('/magasin/create', magCon.magasinCreate);


/**
 * @swagger
 * /api/magasin/update/{id}:
 *   put:
 *     summary: update a  magasin
 *     tags: [Magasin]
 *     responses:
 *       200:
 *         description: Update a  magasins.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Magasin'
 */
router.put('/magasin/update/:id', magCon.updateMagasin);


/**
 * @swagger
 * /api/magasin/delete/{id}:
 *   delete:
 *     summary: Delete magasin
 *     tags: [Magasin]
 *     responses:
 *       200:
 *         description: Delete magasins.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Magasin'
 */
router.delete('/magasin/delete/:id', magCon.deleteMagasin);

module.exports = router;
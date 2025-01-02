const express = require('express');
const roleCon = require('../controller/role.controller');

const router = express.Router();
/**
 * @swagger
 * tags:
 *   name: Role
 *   description: Role management API
 */


/**
 * @swagger
 * /api/role/getRole:
 *   get:
 *     summary: Retrieve all roles
 *     tags: [Role]
 *     responses:
 *       200:
 *         description: A list of roles.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Role'
 */
router.get('/role/getRole', roleCon.getRole);

/**
 * @swagger
 * /api/role/create:
 *   post:
 *     summary: Add a new role
 *     tags: [Role]
 *     responses:
 *       200:
 *         description: Add a new role.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Role'
 */
router.post('/role/create', roleCon.roleCreate);

/**
 * @swagger
 * /api/role/update/{id}:
 *   put:
 *     summary: update a  roles
 *     tags: [Role]
 *     responses:
 *       200:
 *         description: update a role.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Role'
 */
router.put('/role/update/:id', roleCon.updateRoles);

/**
 * @swagger
 * /api/role/delete/{id}:
 *   delete:
 *     summary: Remove a role
 *     tags: [Role]
 *     responses:
 *       200:
 *         description: Remove a role
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Role'
 */
router.delete('/role/delete/:id', roleCon.deleteRoles);

module.exports = router;
const express  = require('express');
const userCon = require('../controller/user.controller');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: User
 *   description: User management API
 */


/**
 * @swagger
 * /api/users/create:
 *   post:
 *     summary: Add a new user
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Add a new user.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.post('/users/create', userCon.createUser);

/**
 * @swagger
 * /api/users/getAllUsers
 *   get:
 *     summary: Retrieve all users
 *     tags: [User]
 *     responses:
 *       200:
 *         description: A list of roles.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.get('/users/getAllUser', userCon.getUsers);

/**
 * @swagger
 * /api/users/getUserById:
 *   get:
 *     summary: Retrieve all user
 *     tags: [User]
 *     responses:
 *       200:
 *         description: A list of user.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.get('/users/getUserById/:id', userCon.getUserById);

/**
 * @swagger
 * /api/users/update/:id
 *   get:
 *     summary: update a user
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Update user.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.put('/users/update/:id', userCon.updateUsers);

/**
 * @swagger
 * /api/users/deleteUser/:id
 *   delete:
 *     summary: remove user
 *     tags: [Roles]
 *     responses:
 *       200:
 *         description: remove user.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.delete('/users/delete/:id', userCon.deleteUser);



module.exports = router;
const userService = require('../services/user.service');

const createUser = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message : error.message });
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
 };

const getUserById = async (req, res) => {
    try {
        const user = await userService.getUserById(req.params.id);
        if (!user) {
            res.status(404).json({ message: 'User not found.' });
        } else {
            res.json(user);
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch user.' });
    }
};


const updateUsers = async (req, res) => {
    try {
        const user = await userService.updateUser(req.body, req.params.id);
        res.json(user);
    } catch (error) {
        if (error.message === 'Aucun user trouvé') {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: error.message });
        }
    }
};


const deleteUser = async (req, res) => {
    try {
        const message = await userService.deleteUser(req.params.id);
        res.json({ message });
    } catch (error) {
        if (error.message === 'User non trouvé') {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: error.message });
        }
    }
};


module.exports = { createUser, getUsers,getUserById,updateUsers,deleteUser};
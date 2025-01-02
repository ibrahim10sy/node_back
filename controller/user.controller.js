const userService = require('../services/user.service');

const createUser = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
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


const getUserById = ("/:idUser", async (req, res) => {
    try {
        const user = await userService.getUserById(req.params.idUser);
        if (!user) {
            res.status(404).json({ message: 'User not found.' });
        } else {
            res.json(user);
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch user.' });
    }
});


const updateUsers =("/:idUser ", async (req, res) => {
    try {
        const u = await userService.getUserById(req.params.idUser);
                if (!u) {
                    return res
                      .status(404)
                      .json({ statusCode: 404, error: "User Does not exist" });
                  }
        const user = await userService.updateUser(req.body);
        res.json(user);
    } catch (error) {
       res.status(500).json({ message: error.message });
    
    }
});


const deleteUser = ("/:idUser " , async (req, res) => {
    try {
        const u = await userService.getUserById(req.params.idUser);
        if (!u) {
            return res
              .status(404)
              .json({ statusCode: 404, error: "User Does not exist" });
          }

         await userService.deleteUser(req.params.id);
         return res.json({
            statusCode: 200,
            message: `User supprimé avec succès`,
          });
    } catch (error) {
        if (error.message === 'User non trouvé') {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: error.message });
        }
    }
});


module.exports = { createUser, getUsers,getUserById,updateUsers,deleteUser};
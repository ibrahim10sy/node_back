const  roleService=  require('../services/role.service');



const roleCreate = async (req, res) => {
    try {
        const role = await roleService.createRole(req.body);
        res.status(200).json(role);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



const getRole = async (req, res) => {
    try {
        const role = await roleService.getRole();
        res.json(role);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getRoleById = async (req, res) => {
    try {
        const role = await roleService.getRoleById(req.params.id);
        if (!role) {
            res.status(404).json({ message: 'Aucun rôle trouvé' });
        } else {
            res.json(user);
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch user.' });
    }
};

const updateRoles =  async (req, res) => {
    try {
        const role = await roleService.updateRole(req.body, req.params.id);
        res.json(role);
    } catch (error) {
        if (error.message === 'Aucun user trouvé') {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: error.message });
        }
    }
};

const deleteRoles =  async (req, res) => {
    try {
        const message = await roleService.deleteRole(req.params.id);
        res.json({ message });
    } catch (error) {
        if (error.message === 'Aucun rôle trouvé') {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: error.message });
        }
    }
};


module.exports = {roleCreate,getRole,getRoleById,deleteRoles,updateRoles}
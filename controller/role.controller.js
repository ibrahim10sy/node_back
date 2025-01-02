const  roleService=  require('../services/role.service');



const roleCreate = async (req, res) => {
    try {
        
        const { libelle, description } = req.body;

        if (!libelle || !description) {
            return res.status(400).json({ message: "Libelle and description are required" });
        }

        const role = await roleService.createRole(req.body);
        res.status(200).json(role);
    } catch (error) {
        console.log(error)
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

const getRoleById = ("/:idRole",async (req, res) => {
    try {
        const role = await roleService.getRoleById(req.params.idRole);
        if (!role) {
            res.status(404).json({ message: 'Aucun rôle trouvé' });
        } else {
            res.json(user);
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch role.' });
    }
});

const updateRoles = ("/:idRole", async (req, res) => {
    try {

        const r = await roleService.getRoleById(req.params.idRole);
                if (!r) {
                    return res
                      .status(404)
                      .json({ statusCode: 404, error: "Role Does not exist" });
                  }

        const role = await roleService.updateRole(req.body);
        res.json(role);
    } catch (error) {
        
            res.status(500).json({ message: error.message });
    
    }
});

const deleteRoles =  async (req, res) => {
    try {
        const r = await roleService.getRoleById(req.params.idRole);
        if (!r) {
            return res
              .status(404)
              .json({ statusCode: 404, error: "Role Does not exist" });
          }

        await roleService.deleteRole(req.params.id);
        return res.json({
            statusCode: 200,
            message: `Role supprimé avec succès`,
          });
    } catch (error) {
        res.status(500).json({ message: error.message });
    
    }
};


module.exports = {roleCreate,getRole,getRoleById,deleteRoles,updateRoles}
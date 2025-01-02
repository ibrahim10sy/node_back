const magService = require('../services/magasin.service');

const magasinCreate = async (req,res) => {
    try {
        const mag = await magService.createMagasin(req.body);
        res.status(200).json(mag);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}

const getAllMagasin = async (req, res) => {
    try {
        const mag = await magService.getMagasin();
        res.json(mag);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const  getMagasinById = ("/:idMagasin",  async (req, res) => {
    try {
        const mag = await magService.getMagasinById(req.params.idMagasin);
        if (!mag) {
            res.status(404).json({ message: 'Aucun magasin trouvé' });
        } else {
            res.json(user);
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch user.' });
    }
});

const updateMagasin = ("/:idMagasin" ,async (req,res) => {
    try {
        const m = await magService.getMagasinById(req.params.idMagasin);
        if (!m) {
            return res
              .status(404)
              .json({ statusCode: 404, error: "Magasin Does not exist" });
          }
        const mag = await magService.updateMagasin(req.body);
        res.json(mag);
    } catch (error) {
      
            res.status(500).json({ message: error.message });
    
    }
});

const deleteMagasin = ("/:idMagasin" , async (req, res) => {
    try {
        const m = await magService.getMagasinById(req.params.idMagasin);
        if (!m) {
            return res
              .status(404)
              .json({ statusCode: 404, error: "Magasin Does not exist" });
          }
        await magService.deleteMagasin(req.params.id);
        return res.json({
            statusCode: 200,
            message: `Magasin supprimé avec succès`,
          });
    } catch (error) {
        
            res.status(500).json({ message: error.message });
    }
});


module.exports = {deleteMagasin,getAllMagasin,getMagasinById,magasinCreate,updateMagasin}
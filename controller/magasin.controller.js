const magService = require('../services/magasin.service');

const magasinCreate = async (req,res) => {
    try {
        const mag = await magService.createMagasin(req.body);
        res.status(200).json(role);
    } catch (error) {
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

const  getMagasinById = async (req, res) => {
    try {
        const mag = await magService.getMagasinById(req.params.id);
        if (!mag) {
            res.status(404).json({ message: 'Aucun magasin trouvé' });
        } else {
            res.json(user);
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch user.' });
    }
}

const updateMagasin = async (req,res) => {
    try {
        const mag = await magService.updateMagasin(req.body, req.params.id);
        res.json(mag);
    } catch (error) {
        if (error.message === 'Aucun magasin trouvé ') {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: error.message });
        }
    }
}

const deleteMagasin =  async (req, res) => {
    try {
        const message = await magService.deleteMagasin(req.params.id);
        res.json({ message });
    } catch (error) {
        if (error.message === 'Aucun magasin trouvé') {
            res.status(404).json({ message: error.message });
        } else {
            res.status(500).json({ message: error.message });
        }
    }
};


module.exports = {deleteMagasin,getAllMagasin,getMagasinById,magasinCreate,updateMagasin}
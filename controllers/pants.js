const { Pant }  = require('../models');

const getAllPants = async (req, res) => {
    try {
        const pants = await Pant.find()
        res.json(pants)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getOnePant(req, res) {
    try {
        const id = req.params.id
        const pant = await Pant.findById(id)
        if (pant) {
            return res.json(Pant)
        }
        return res.status(404).send('Pant with this id doesnt exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createPant(req,res) {
    try {
        const pant = await new Pant (req.body)
        await pant.save()
        return res.status(201).json({
            pant
        })
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


async function updatePant(req,res) {
    try {
        const id = req.params.id
        const pant = await Pant.findByIdAndUpdate(id, req.body, {new: true})
        if (pant) {
            return res.status(200).json(pant)
        }
        throw new Error('Pant not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}

async function deletePant(req,res) {
    try {
        const id = req.params.id
        const pant =  await Pant.findByIdAndDelete(id)
        if (pant) {
            return res.status(200).json(Pant)
        }
        throw new Error('Pant not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


module.exports = {
    getAllPants,
    getOnePant,
    createPant,
    updatePant,
    deletePant
}
const { Shirt }  = require('../models');

const getAllShirts = async (req, res) => {
    try {
        const shirts = await Shirt.find()
        res.json(shirts)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getOneShirt(req, res) {
    try {
        const id = req.params.id
        const shirt = await Shirt.findById(id)
        if (shirt) {
            return res.json(shirt)
        }
        return res.status(404).send('Shirt with this id doesnt exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createShirt(req,res) {
    try {
        const shirt = await new Shirt (req.body)
        await shirt.save()
        return res.status(201).json({
            shirt
        })
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


async function updateShirt(req,res) {
    try {
        const id = req.params.id
        const shirt = await Shirt.findByIdAndUpdate(id, req.body, {new: true})
        if (shirt) {
            return res.status(200).json(Shirt)
        }
        throw new Error('Shirt not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}

async function deleteShirt(req,res) {
    try {
        const id = req.params.id
        const shirt =  await Shirt.findByIdAndDelete(id)
        if (shirt) {
            return res.status(200).json(Shirt)
        }
        throw new Error('Shirt not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


module.exports = {
    getAllShirts,
    getOneShirt,
    createShirt,
    updateShirt,
    deleteShirt
}
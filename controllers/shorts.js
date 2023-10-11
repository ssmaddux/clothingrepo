const { Short}  = require('../models');

const getAllShorts = async (req, res) => {
    try {
        const shorts = await Short.find()
        res.json(shorts)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getOneShort(req, res) {
    try {
        const id = req.params.id
        const short = await Short.findById(id)
        if (short) {
            return res.json(short)
        }
        return res.status(404).send('Short with this id doesnt exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createShort(req,res) {
    try {
        const short = await new Short (req.body)
        await short.save()
        return res.status(201).json({
            short
        })
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


async function updateShort(req,res) {
    try {
        const id = req.params.id
        const short = await Short.findByIdAndUpdate(id, req.body, {new: true})
        if (short) {
            return res.status(200).json(short)
        }
        throw new Error('Short not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}

async function deleteShort(req,res) {
    try {
        const id = req.params.id
        const short =  await Short.findByIdAndDelete(id)
        if (short) {
            return res.status(200).json(short)
        }
        throw new Error('Short not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


module.exports = {
    getAllShorts,
    getOneShort,
    createShort,
    updateShort,
    deleteShort
}
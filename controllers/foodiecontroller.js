const express = require('express');
const router = express.Router();
const validateSession = require('../middleware/validate-session');
const Food = require('../db').import('../models/food');


router.get('/practice', validateSession, function(req, res){
    res.send('Hey! This is a practice route!')
});

router.post('/', validateSession, (req, res) => {
    const foodEntry = {
        description: req.body.food.description,
        definition: req.body.food.definition,
        result: req.body.food.result,
        owner: req.user.id
    }
    Food.create(foodEntry)
    .then(food => res.status(200).json(food))
    .catch(err => res.status(500).json({ error: err }))
});

router.get("/", (req, res) => {
    Food.findAll()
    .then(foods => res.status(200).json(foods))
    .catch(err => res.status(500).json({ error: err }))
});

router.get("/mine", validateSession, (req,res) => {
    let userid = req.user.id
    Food.findAll({
        where: { owner: userid }
    })
    .then(food => res.status(200).json(food))
    .catch(err => res.status(500).json({ error: err }))
})

router.get('/:id', function (req, res) {
    let description = req.params.id;

    Food.findAll({
        where: { id: description }
    })
    .then(food => res.status(200).json(food))
    .catch(err => res.status(500).json({ error: err }))
})

router.put("/:id", validateSession, function(req, res) {
    const updateFoodEntry = {
        description: req.body.food.description,
        definition: req.body.food.defenition,
        result: req.body.food.result
    };

    const query = { where: { id: req.params.id, owner: req.user.id } };

    Food.update(updateFoodEntry, query)
    .then(foods => res.status(200).json(foods))
    .catch(err => res.status(500).json({ error: err }))
});

router.delete("/:id", validateSession, function (req, res) {
    const query = { where: { id: req.params.id, owner: req.user.id } };

    Food.destroy(query)
    .then(() => res.status(200).json({ message: "Food Entry Removed "}))
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router
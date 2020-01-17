const express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    Category = require('../models/categories');


router.get('/', async (req, res) => {
    const categories = await Category.find({});
    res.json(categories)
})


module.exports = router;
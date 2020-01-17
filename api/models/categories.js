const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    mainCategoryName: String,
    icon: String,
    subcategories: Array,

})

module.exports = mongoose.model("Category", CategorySchema)
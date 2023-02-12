const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const productSchema = new mongoose.Schema({
    product: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
},
    { timestamps: true });

productSchema.plugin(uniqueValidator)
module.exports.Product = mongoose.model('products', productSchema);
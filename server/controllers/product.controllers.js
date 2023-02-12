const { Product } = require('../models/product.models');

const createProduct = (req, res) => {
    const { product, price, description } = req.body;
    Product.create({
        product,
        price,
        description
    })
        .then(prod => res.json(prod))
        .catch(err => res.json(err));
}

const getProduct = (req, res) => {
    Product.find()
        .then(prod => res.json({ prod }))
        .catch(err => res.json(err));
}

const showProduct = (req, res) => {
    Product.findOne({product: req.params.prod})
        .then(prod => res.json({ prod }))
        .catch(err => res.json(err));
}


module.exports = {
    createProduct,
    getProduct,
    showProduct
}


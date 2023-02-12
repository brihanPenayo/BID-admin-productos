const ProductController = require('../controllers/product.controllers');
module.exports = function (app) {
    app.post('/product', ProductController.createProduct);
    app.get('/product', ProductController.getProduct);
}
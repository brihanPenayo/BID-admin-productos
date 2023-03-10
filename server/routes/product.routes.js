const ProductController = require('../controllers/product.controllers');
module.exports = function (app) {
    app.post('/product', ProductController.createProduct);
    app.get('/product', ProductController.getProduct);
    app.get('/product/:prod', ProductController.showProduct);
    app.delete('/product/:id', ProductController.deleteProduct);
    app.put('/product/:prod/edit', ProductController.updateProduct);
}
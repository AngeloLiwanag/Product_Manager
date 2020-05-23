const FormController = require('../controllers/form.controller');

module.exports = function(app){
    app.get('/api', FormController.index);
    app.post('/api/product', FormController.createProduct);
    app.get('/api/products', FormController.getAllProducts);
    app.get('/api/product/:id', FormController.findOneProduct);
    app.put('/api/product/:id', FormController.updateProduct);
    app.delete('/api/product/:id', FormController.deleteProduct);
}
const FormController = require('../controllers/form.controller');
module.exports = function(app){
    app.get('/api', FormController.index);
    app.post('/api/product', FormController.createProduct);
}
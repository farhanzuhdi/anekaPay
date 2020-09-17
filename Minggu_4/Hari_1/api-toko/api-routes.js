let router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});

var bukuController = require('./bukuController');

router.route('/buku')
    .get(bukuController.index)
    .post(bukuController.add);

router.route('/buku/:nama')
    .get(bukuController.view)
    .post(bukuController.update)
    .delete(bukuController.delete);


// Export API routes
module.exports = router;
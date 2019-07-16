var express = require('express');
var router = express.Router();

router.get('/test1', function (req, res, next) {
    res.send('test1');
});

module.exports = {
    controllerMapping: '/test2',
    requestMappings: router
};


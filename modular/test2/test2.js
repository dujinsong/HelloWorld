var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.send('test2');
});

module.exports = {
    controllerMapping: '/test2',
    requestMappings: router
};

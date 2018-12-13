var express = require('express');
var router = express.Router();
const Medium = require('./Medium');

router.use('/medium', Medium);
module.exports = router;

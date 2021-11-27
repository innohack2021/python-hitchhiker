var express = require('express');
var glob = require('glob');
var fs = require('fs');
var router = express.Router();
const contentController = require('../controllers/contentController');

//본문 조회
router.get('/description/:page', contentController.descriptionPage);

//코드 조회
router.get('/code/:page', contentController.codePage);

module.exports = router;

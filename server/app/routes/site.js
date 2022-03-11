const express = require('express');
const router = express.Router();
const SiteController = require('../controllers/SiteController')
const requireLogin = require('../middleware/requireLogin')

router.get('/',requireLogin, SiteController.index)

module.exports = router
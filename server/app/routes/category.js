const express = require("express");
const router = express.Router();

const {list, create} = require('../controllers/category')

router.get('/', list)
router.post('/create', create)

module.exports = router;

const express = require('express');
const router = express.Router();
const homecontroller = require('../controllers/home_controller');
router.get('/',homecontroller.home);
console.log('router loaded and you can go to this route and do some shit as always');
module.exports = router;
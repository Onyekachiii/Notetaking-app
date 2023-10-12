const express = require('express');
const router = express.Router();
const main_controller = require ('../controllers/main_controller');

// 

router.get('/', main_controller.homepage);
router.get('/about', main_controller.about);

module.exports = router;
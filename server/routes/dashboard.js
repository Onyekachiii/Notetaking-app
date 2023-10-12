const express = require('express');
const router = express.Router();
const dashboard_controller = require ('../controllers/dashboard_controller');

// Dashboard Routes
router.get('/dashboard', dashboard_controller.dashboard);



module.exports = router;

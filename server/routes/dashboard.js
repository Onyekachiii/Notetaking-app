const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middleware/checkAuth');
const dashboard_controller = require ('../controllers/dashboard_controller');

// Dashboard Routes
router.get('/dashboard', isLoggedIn, dashboard_controller.dashboard);
router.get('/dashboard/item/:id', isLoggedIn, dashboard_controller.dashboardViewNote);
router.put('/dashboard/item/:id', isLoggedIn, dashboard_controller.dashboardUpdateNote);
router.delete('/dashboard/item-delete/:id', isLoggedIn, dashboard_controller.dashboardDeleteNote);
router.get('/dashboard/add', isLoggedIn, dashboard_controller.dashboardAddNote);
router.post('/dashboard/add', isLoggedIn, dashboard_controller.dashboardAddNoteSubmit);
router.get('/dashboard/search', isLoggedIn, dashboard_controller.dashboardSearch);
router.post('/dashboard/search', isLoggedIn, dashboard_controller.dashboardSearchSubmit);



module.exports = router;

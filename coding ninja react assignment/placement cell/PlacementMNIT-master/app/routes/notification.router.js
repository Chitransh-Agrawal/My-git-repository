const router = require('express').Router();
const notificationController = require('../controllers/notification.controller');
const jwtMiddleware = require('../middlewares/jwt.middleware');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/add', jwtMiddleware.verify, authMiddleware.ensureOfficialPlacementTeam, notificationController.add);
router.post('/getAll', jwtMiddleware.verify,   notificationController.getAll);
router.post('/wipe', jwtMiddleware.verify,   notificationController.wipe);

module.exports = router;

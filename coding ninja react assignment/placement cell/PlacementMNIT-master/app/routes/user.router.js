const router = require('express').Router();
const userController = require('../controllers/user.controller');
const jwtMiddleware = require('../middlewares/jwt.middleware');
const authMiddleware = require('../middlewares/auth.middleware');

// todo replace sendOTP, login => login (local storage to remember device)
router.post('/sendOTP', userController.sendOTP);
router.post('/login', userController.login);
router.post('/forgotPassword', userController.forgotPassword);
router.post('/verifyToken', userController.verifyToken);
router.post('/resetPassword', userController.resetPassword);
router.post('/me', jwtMiddleware.verify,   userController.me);
router.get('/permission', jwtMiddleware.verify,   userController.permission)
router.get('/timeline', jwtMiddleware.verify,   userController.timeline)
router.get('/profile', jwtMiddleware.verify,   userController.profile)
router.get('/getOne/:college_id', jwtMiddleware.verify, authMiddleware.ensureOfficialPlacementTeam, userController.getOne)
router.post('/updateOne', jwtMiddleware.verify, authMiddleware.ensureOfficialPlacementTeam, userController.updateOne)
router.post('/updateProfile', jwtMiddleware.verify,   userController.updateProfile)
router.post('/changePassword', jwtMiddleware.verify,   userController.changePassword)
router.get('/contributions', jwtMiddleware.verify,   userController.contributions)
router.post('/updateBatch', jwtMiddleware.verify, authMiddleware.ensureOfficialPlacementTeam, userController.updateBatch)
router.get('/achievements', jwtMiddleware.verify, authMiddleware.ensureStudent, userController.achievements)

module.exports = router;

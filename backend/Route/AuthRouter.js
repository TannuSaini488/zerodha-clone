const { userVerification } = require('../Middlewares/AuthMiddleware.js');
const { SignUp, LogIn, LogOut } = require('../utility/AuthController.js');

const router = require('express').Router();

router.post('/',userVerification);
router.post('/signup', SignUp);
router.post('/login', LogIn);
router.post('/logout', LogOut);

module.exports = router;
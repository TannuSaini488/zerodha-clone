const { userVerification } = require('../Middlewares/AuthMiddleware.js');
const { SignUp, LogIn } = require('../utility/AuthController.js');
const router = require('express').Router();

router.post('/',userVerification);
router.post('/signup', SignUp);
router.post('/login', LogIn);

module.exports = router;
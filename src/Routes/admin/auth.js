const express = require('express');
const { signup, signin } = require('../../controllers/admin/auth');
const { validateSignUpRequest, isRequestValidated, validateLoginRequest } = require('../../validation/auth');
const router = express.Router();




router.post('/admin/signup',validateSignUpRequest,isRequestValidated, signup);
router.post('/admin/signin',validateLoginRequest,isRequestValidated, signin);


module.exports = router;




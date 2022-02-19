const {check, validationResult } = require("express-validator");


exports.validateSignUpRequest=[ check('firstName')
.notEmpty()
.withMessage("FirstName Is required"),
check('lastName')
.notEmpty()
.withMessage("LastName is required"),
//check('lastName'),
check('email')
.isEmail()
.withMessage('Enter valid email'),
check('password')
.isLength({ min:6 }).
withMessage("Password should be atleast of 6 characters")];

//login validation

exports.validateLoginRequest=[
check('email')
.isEmail()
.withMessage('Enter valid email'),
check('password')
.isLength({ min:6 }).
withMessage("Password should be atleast of 6 characters")];

exports.isRequestValidated=(req,res,next)=>{
    const errors=validationResult(req);
    if(errors.array().length>0){
        return res.status(400).json({errors:errors.array()[0].msg})
    }
    next();
}
//user profile

exports.requireSignin=(req,res,next)=>{
    const token=req.headers.authorization.split(" ")[1];//will split with space and give output in array format here we want element at index 1
   const user=jwt.verify(token,process.env.JWT_SECRET);//here we are decoding the token
   req.user=user;//attaching new property to the user
    next();//means what next to be executed....
  }
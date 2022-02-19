const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
//bcrypt is  a library that is used to encrypt the passward in such a way that its decryption is not possible at all

//Hashing-->Hashing is a one-way ticket to data encryption. Hashing performs a one-way transformation on a password, turning the password into another String, called the hashed password. Hashing is called one way because it's practically impossible to get the original text from a hash.
const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
        min:3,
        max:20
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
        min:3,
        max:20
    },
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        index:true,
        lowercase:true
    },

    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true
    },
    hash_password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["user","admin","super-admin"],
        default:"user",
    },
    contactNumber:{type:String},
    profilePicture:{type:String},
    
},{timestamps:true});
//for password encryption....
userSchema.virtual('password')
.set(function(password){
    this.hash_password=bcrypt.hashSync(password,10);
});


//note above 10 is the salt value used to determine level of encryption

//for the full name
userSchema.virtual("fullName").get(function () {
    return `${this.firstName} ${this.lastName}`;//here using string template
  });


//for authenticating user
userSchema.methods={
    authenticate: function(password){
        return  bcrypt.compareSync(password,this.hash_password);//here we are comparing the password...
    }
}


module.exports=mongoose.model('User',userSchema);



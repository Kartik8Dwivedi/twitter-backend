import mongoose from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config();

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type : String,
        required : true,
    },
    name:{
        type : String,
        required : true,
    }
}, { timestamps: true });

userSchema.pre('save', function(next){
    const user = this;
    const SALT = bcrypt.genSaltSync(10);
    const encryptedPassword = bcrypt.hashSync(user.password, SALT);
    user.password = encryptedPassword;
    next();
})

userSchema.methods.comparePassword = function compare(password){
    const userPassword = this.password;
    return bcrypt.compareSync(password, userPassword)
}

userSchema.methods.generateJWTtoken = function generate(){
    return jwt.sign({
        id: this._id,
        email: this.email,
    }, process.env.JWT_SECRET, { expiresIn: '1d'})
}

const User = mongoose.model('User', userSchema); 

export default User;
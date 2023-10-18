import JWT from 'passport-jwt'
import User from '../models/user.js'
import dotenv from 'dotenv'
dotenv.config()

const { Strategy, ExtractJwt } = JWT

const options = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey :  process.env.JWT_SECRET
}

export const passportAuth = (passport) => {
    passport.use(new Strategy(options, (jwt_payload, done) => {
        const user = User.findById(jwt_payload.id)
        if(!user){
            done(null,false);
        }else{
            done(null,user);
        }
    }));
}
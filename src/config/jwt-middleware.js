import JWT from "passport-jwt";
import User from "../models/user.js";
import dotenv from "dotenv";
dotenv.config();

const JwtStrategy = JWT.Strategy;
const ExtractJwt = JWT.ExtractJwt;

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

export const passportAuth = (passport) => {
  try {
    passport.use(
      new JwtStrategy(opts, async (jwt_payload, done) => {
        const user = await User.findById(jwt_payload.id);
        console.log("jwtpayload")
        console.log(jwt_payload);
        if (!user) {
          done(null, false);
        } else {
          done(null, user);
        }
      })
    );
  } catch (err) {
    console.log(err);
    throw err;
  }
};

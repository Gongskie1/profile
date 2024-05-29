import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import model from "../../models/user.cjs";
import { DataTypes } from "sequelize";
import connection from "../mysql/connection.js"

const User = model(connection,DataTypes);


export default passport.use(new LocalStrategy(async (username, password, done) => {
    try {
        const findUser = await User.findOne({ where: { username: username } });
        if (!findUser) return done(null, false, { message: "Incorrect username" });
        if (findUser.password !== password) return done(null, false, { message: "Incorrect password" });
        return done(null, findUser);
    } catch (error) {
        return done(error);
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findOne({ where: { id: id } });
        done(null, user);
    } catch (error) {
        done(error);
    }
});

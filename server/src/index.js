import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import session from "express-session";
import passport from "passport";
import routes from "./controller/routes/index.js"

const app = express();
const port = process.env.PORT;

app.use(session(
    {
        secret: "practicemore",
        saveUninitialized:false,
        resave:false,
        cookie:{
            maxAge:60000*60
        },

    }
));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());



app.use(routes);



app.listen(port, console.log(`This server running on http://localhost:${port}`))
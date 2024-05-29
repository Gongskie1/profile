import { Router } from "express";
const router = Router();
import userController from "../user/index.js"
import passport_local_strat from "../../passport_auth/passport_local_strat.js";

const customAuthenticate = (req, res, next) => {
    passport_local_strat.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            // Authentication failed, send custom error message
            return res.status(401).json({ message: info.message });
        }
        req.logIn(user, (err) => {
            if (err) {
                // An error occurred during the login process
                return next(err); // Propagate error to centralized handler
            }
            // Authentication and login successful, proceed to the next middleware
            return next();
        });
    })(req, res, next);
};

router.post('/login', customAuthenticate, userController.login);

router.post(
    "/create-account",
    userController.register
)
router.get(
    "/home", userController.getting
)

export default router;
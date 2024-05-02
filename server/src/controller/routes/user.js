import { Router } from "express";
const router = Router();
import userController from "../user/index.js"
import passport_local_strat from "../../passport_auth/passport_local_strat.js";

router.post(
    "/login",
    passport_local_strat.authenticate("local"),
    userController.create
);
router.get(
    "/home",
    userController.getting
)

export default router;
import express from "express";
import * as auth_controller from "../controller/auth_controller.mjs";

const router = express.Router();

//log_in
router.post("/log_in", auth_controller.log_in);
//maintain log_in

//sign_up
router.post("/sign_up", auth_controller.sign_up);

export default router;
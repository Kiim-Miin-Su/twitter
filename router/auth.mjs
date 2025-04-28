import express from "express";
import * as auth_controller from "../controller/auth_controller.mjs";
import { body } from "express-validator";
import { validate } from "../middleware/validator.mjs";

const router = express.Router();

const validate_logIn = [
    body("input_id")
        .trim()
        .isLength({ min: 4 })
        .withMessage("ID must be at least 4 characters long")
        .matches(/^[a-zA-Z0-9]*$/)
        .withMessage("ID can only contain letters and numbers"),
    body("input_pw")
        .trim()
        .isLength({ min: 8 })
        .withMessage("Password must be at least 8 characters long")
        .matches(/^[a-zA-Z0-9!@#$%^&*()_+]*$/)
        .withMessage("Password can only contain letters, numbers, and special characters"),
    validate
]

const validate_signUp = [
    ...validate_logIn,
    body("name")
        .trim()
        .notEmpty()
        .withMessage("Name is required"),
    body("email")
        .trim()
        .isEmail()
        .withMessage("Invalid email format"),
    validate
]

router.get("/", auth_controller.send_logIn);

//log_in
router.post("/log_in", validate_logIn, auth_controller.log_in);

//sign_up
router.post("/sign_up", validate_signUp, auth_controller.sign_up);

//about me
router.get("/me", auth_controller.me);

//log_out
router.get("/log_out", auth_controller.log_out);

export default router;
import express from "express";
import * as auth_repository from "../data/auth.mjs";
import session from "express-session";

const app = express();
app.use(express.json());
app.use(session({ secret: "!tc4079tc@", resave: false, saveUninitialized: false, cookie: { secure: false } }));

export async function send_logIn(req, res, next) {
    res.render("log_in");
    return res.status(200);
}

export async function log_in(req, res, next) {
    const { input_id, input_pw } = req.body;
    const user = await auth_repository.log_in(input_id, input_pw);

    if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    req.session.user = { user_id: user.user_id };
    return res.status(200).json(`Hello ${user.user_id}!`);
}


export async function sign_up(req, res, next) {
    const { input_id, input_pw, name, email } = req.body;
    const user = await auth_repository.sign_up(input_id, input_pw, name, email);
    return user ? res.status(201).json(user) : res.status(400).json({ message: "Sign up failed" });
}

export async function me(req, res, next) {
    if (req.session.user) {
        return res.status(200).json(req.session.user);
    } else {
        return res.status(401).json({ message: "Unauthorized" });
    }
}
export async function log_out(req, res, next) {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ message: "Error logging out" });
        }
        return res.status(200).json({ message: "Logged out" });
    });
}

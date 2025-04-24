import express from "express";
import * as auth_repository from "../data/auth.mjs";

const app = express();
app.use(express.json());

export async function log_in(req, res, next) {
    const { input_id, input_pw } = req.body;
    const user = await auth_repository.log_in(input_id, input_pw);
    return user ? res.status(200).json(`Hello ${user.name}!`) : res.status(401).json({ message: "Invalid credentials" });
}
export async function sign_up(req, res, next) {
    const { input_id, input_pw, name, email } = req.body;
    const user = await auth_repository.sign_up(input_id, input_pw, name, email);
    return user ? res.status(201).json(user) : res.status(400).json({ message: "Sign up failed" });
}
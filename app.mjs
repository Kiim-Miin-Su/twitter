import express from "express";
import path from "path";
import session from "express-session";

import posts_router from "./router/posts.mjs";
import auth_router from "./router/auth.mjs";

const app = express();
const port = 8080;

app.use(express.json());
app.use(session({
    secret: "!tc4079tc@",
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false, // 개발 환경에서는 false
        httpOnly: true,
    },
}));

app.use("/posts", posts_router);
app.use("/auth", auth_router);

app.use((req, res, next) => {
    res.sendStatus(404);
    console.log("404 Not Found");
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})
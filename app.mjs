import express from "express";
import path from "path";
import posts_router from "./router/posts.mjs";
import auth_router from "./router/auth.mjs";

const app = express();
const port = 8080;

__dirname = path.resolve();

app.use(express.json());
app.use("/posts", posts_router);
app.use("/auth", auth_router);

app.use((req, res, next) => {
    res.sendStatus(404);
    console.log("404 Not Found");
    next();
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})
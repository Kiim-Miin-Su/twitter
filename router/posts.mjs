import express from "express";
import * as post_controller from "../controller/posts_controller.mjs";
import { body } from "express-validator";
import { validate } from "../middleware/validator.mjs";

const router = express.Router();

const validate_post = [
    body("text")
        .trim()
        .isLength({ min: 5 })
        .withMessage("Text must be at least 5 characters long"),
    validate
]

// get all posts
// get post by user_id
router.get("/", post_controller.get_posts);

// get post by post_id
router.get("/:post_id", post_controller.get_post_by_post_id);

// (post) write post by json
router.post("/", validate_post, post_controller.create_post);

// (put) update post by post_id
router.put("/:post_id", validate_post, post_controller.update_post);

// (delete) delete post by post_id
router.delete("/:post_id", post_controller.delete_post);

export default router;
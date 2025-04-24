import express from "express";
import * as post_repository from "../data/posts.mjs";

const app = express();

export async function get_posts(req, res, next) {
    const user_id = req.query.user_id;
    const data = await (user_id ? post_repository.get_all_by_user_id(user_id) : post_repository.get_all());
    res.status(200).json(data);
}

export async function get_post_by_post_id(req, res, next) {
    const post_id = req.params.post_id;
    const data = await post_repository.get_all_by_post_id(post_id);
    if (data) {
        res.status(200).json(data);
    } else {
        res.status(404).json({ message: "Post not found" });
    }
}

export async function create_post(req, res, next) {
    const { user_id, name, text } = req.body;
    const posts = await post_repository.create_post(user_id, name, text); // post는 배열로 반환됨
    res.status(201).json(posts);
}

export async function update_post(req, res, next) {
    const post_id = req.params.post_id;
    const text = req.body.text;
    const posts = await post_repository.update_post(post_id, text);
    if (posts) {
        res.status(200).json(posts);
    } else {
        res.status(404).json({ message: "Post not found" });
    }
}

export async function delete_post(req, res, next) {
    const post_id = req.params.post_id;
    res.status(200).json({ message: `Post ${post_id} deleted` });
    post_repository.delete_post(post_id);
}


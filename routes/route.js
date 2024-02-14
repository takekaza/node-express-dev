const express = require("express");
const router = express.Router();
const API = require("../controllers/controller.js");

// 全件取得
router.get("/", API.fetchAllPost);
// 詳細取得
router.get("/:id", API.fetchPostDetail);
// 投稿
router.post("/", API.createPost);
// router.post("/create", API.createPost);
// 更新
router.patch("/:id", API.updatePost);
// 削除
router.delete("/:id", API.deletePost);

module.exports = router;

const Post = require("../models/model");

module.exports = class API {
  static async fetchAllPost(req, res) {
    try {
      // console.log("[Debug] ", req);
      res.send("[Debug] 全件取得成功");
    } catch (error) {
      res.status(404).json({
        message: error.message,
      });
    }
  }
  static async fetchPostDetail(req, res) {
    const id = req.params.id;
    console.log("[Debug]", id);
    try {
      const post = await Post.findById(id);
      res.status(200).json(post);
      // res.status(200).json(post, {
      //   message: "[Debug] 詳細取得に成功",
      // });
      // res.send("[Debug] 詳細取得に成功");
    } catch (error) {
      res.status(404).json({
        message: error.message,
      });
    }
  }
  static async createPost(req, res) {
    try {
      const post = req.body;
      // const post = req.query;
      console.log("[Debug]", post);
      try {
        res.status(201).json({
          message: "[Debug] 投稿に成功",
        });
      } catch (error) {
        res.status(400).json({
          message: error.message,
        });
      }
      // res.send("[Debug] 投稿に成功");
    } catch (err) {
      res.status(404).json({
        message: err.message,
      });
    }
  }
  static async updatePost(req, res) {
    const id = req.params.id;
    const newPost = req.body;
    console.log("[Debug]", newPost);
    try {
      await Post.findByIdAndUpdate(id, newPost);
      res.status(201).json({
        message: "[Debug] 更新に成功",
      });
      // res.send("[Debug] 更新に成功");
    } catch (err) {
      res.status(400).json({
        message: err.message,
      });
    }
  }
  static async deletePost(req, res) {
    const id = req.params.id;
    try {
      const result = await Post.findByIdAndDelete(id);
      console.log("[Debug]", result.body);
      res.status(201).json({
        message: "[Debug] 削除に成功",
      });
      // res.send("[Debug] 削除に成功");
    } catch (err) {
      res.status(400).json({
        message: err.message,
      });
    }
  }
};

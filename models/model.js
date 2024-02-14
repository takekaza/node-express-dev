const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
});

// スキーマからPostモデルを生成する
module.exports = mongoose.model("Post", PostSchema);

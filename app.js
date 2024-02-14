require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const posts = require("./routes/route");

// express インスタンス化
const app = express();

/*
  新規追加
*/
// JSONボディを解析
app.use(express.json());

// URLエンコードされたボディを解析
app.use(
  express.urlencoded({
    extended: true,
  })
);
/*==================*/

// ポート番号指定
const port = process.env.PORT || 3333;

// MongoDBの接続設定
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("[Debug] データベース接続に成功しました"))
  .catch((err) => console.log(err));

// サーバー立ち上げ
app.listen(port, () =>
  console.log(`[Debug] server running at localhost:${port}`)
);

// リクエスト
app.use("/api/posts", posts);

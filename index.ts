import express from "express";
let cors = require("cors");
require("express-async-errors");
import myRouter from "./router/my";
let host = "127.0.0.1";
let port = 3000;
let app = express();

app.use(cors());
app.use("/my", myRouter);

app.get("/", (req, res) => {
  console.log("header", req.header("access_token"));
  res.json({ message: "hello jkgl interface" });
});

app.use((err, req, res, next) => {
  if (err) {
    console.error("全局操作捕获1，", err);
    res.json({ err: err.message });
    return;
  }
  next();
});

app.use("*", (req, res) => {
  res.json({ message: "不存在的地址" });
});

app.listen(port, () => {
  console.log(`serve start success, it running http://${host}:${port} `);
});

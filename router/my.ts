// 绵阳路由
import express from "express";
import axios from "axios";
import responseInterceptor from "../interceptor/response";
import userModel from "../model/userModel";
let myRouter = express.Router();

let http = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 3000,
});

http.interceptors.response.use(responseInterceptor);

myRouter.get("/getList", async (req, res) => {
  console.log("req,", req.query);

  let resData = await http.get("/", {
    headers: { access_token: req.query.token },
  } as any);
  res.json({ ...userModel, ...resData }).end();
});

export default myRouter;

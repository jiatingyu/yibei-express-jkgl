import express from "express";

let qwRouter = express.Router();

const hello = () => {
  console.log(111222);
};
hello();

export default qwRouter;

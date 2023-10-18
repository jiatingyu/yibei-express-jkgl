"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var qwRouter = express_1.default.Router();
var hello = function () {
    console.log(111222);
};
hello();
exports.default = qwRouter;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// eslint-disable-next-line
require("express-async-errors");
var my_1 = __importDefault(require("./router/my"));
var cors_1 = __importDefault(require("cors"));
var host = '127.0.0.1';
var port = 3000;
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use('/my', my_1.default);
app.get('/', function (req, res) {
    console.log('header', req.header('access_token'));
    res.json({ message: 'hello jkgl interface' });
});
app.use(function (err, req, res, next) {
    if (err != null) {
        console.error('全局操作捕获1，', err);
        res.json({ err: err.message });
        return;
    }
    next();
});
app.use('*', function (req, res) {
    res.json({ message: '不存在的地址' });
});
app.listen(port, function () {
    console.log("serve start success, it running http://".concat(host, ":").concat(port, " "));
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var response = function (_a) {
    var status = _a.status, data = _a.data, statusText = _a.statusText;
    if (status == 200) {
        return data;
    }
    return new Error(statusText);
};
exports.default = response;

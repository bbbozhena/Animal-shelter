"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const port = process.env.PORT;
console.log(port);
const server = http_1.default.createServer((req, res) => {
    res.end("Hello");
});
server.listen(port, () => {
    console.log(`Server is running on  ${port}`);
});

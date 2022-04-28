"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const PORT = 3000;
const transactionHistory = [];
let currentBalance = 0;
const addTransaction = (amount, description) => {
    const objTransaction = { amount, description };
    transactionHistory.push(objTransaction);
};
//------------------------------End Points-----------------------------
app.use(express_1.default.json());
app.get("/v1/balance", (req, res) => {
    res.json({ currentBalance });
});
server.listen(PORT, () => {
    console.log("server running on port " + PORT);
});

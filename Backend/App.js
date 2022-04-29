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
let transactionHistory = [];
let currentBalance = 0;
const addTransaction = (amount, description) => {
    const objTransaction = { amount, description };
    if (amount < 0 && amount * -1 > currentBalance) {
        return false;
    }
    else {
        currentBalance += amount;
        transactionHistory.push(objTransaction);
        console.log(transactionHistory);
        return true;
    }
};
//------------------------------End Points-----------------------------
app.use(express_1.default.json());
app.get("/v1/balance", (req, res) => {
    res.json({ currentBalance });
});
app.post("/v1/transaction", (req, res) => {
    const body = req.body;
    const amount = body.balance;
    const description = body.description;
    if (addTransaction(amount, description)) {
        res.send("OK!");
    }
    else {
        res.send("ERROR!");
    }
});
app.post("/v1/clear", (req, res) => {
    currentBalance = 0;
    transactionHistory = [];
    console.log(transactionHistory);
    res.send("Cleared");
});
server.listen(PORT, () => {
    console.log("server running on port " + PORT);
});

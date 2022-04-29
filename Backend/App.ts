import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);
const PORT = 3000;
let transactionHistory: Object[] = [];
let currentBalance: number = 0;

const addTransaction = (amount: number, description: string): boolean => {
  const objTransaction: Object = { amount, description };
  if (amount < 0 && amount * -1 > currentBalance) {
    return false;
  } else {
    currentBalance += amount;
    transactionHistory.push(objTransaction);
    console.log(transactionHistory);

    return true;
  }
};
//------------------------------End Points-----------------------------
app.use(express.json());

app.get("/v1/balance", (req: express.Request, res: express.Response) => {
  res.json({ currentBalance });
});

app.post("/v1/transaction", (req, res) => {
  const body = req.body;
  const amount: number = body.balance;
  const description: string = body.description;
  if (addTransaction(amount, description)) {
    res.send("OK!");
  } else {
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

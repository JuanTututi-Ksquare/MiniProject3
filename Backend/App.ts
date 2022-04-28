import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);
const PORT = 3000;
const transactionHistory: Object[] = [];
let currentBalance: number = 0;

const addTransaction = (amount: number, description: string): void => {
  const objTransaction: Object = { amount, description };
  transactionHistory.push(objTransaction);
  currentBalance += amount;
};
//------------------------------End Points-----------------------------
app.use(express.json());

app.get("/v1/balance", (req: express.Request, res: express.Response) => {
  res.json({ currentBalance });
});

app.post("/v1/transaction", (req, res) => {
  const body = req.body;
  const amount:number = body.balance;
  const description:string = body.description;
  addTransaction(amount, description);
  res.send("OK!");
});

server.listen(PORT, () => {
  console.log("server running on port " + PORT);
});

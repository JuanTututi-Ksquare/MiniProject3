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
};
//------------------------------End Points-----------------------------
app.use(express.json());

app.get("/v1/balance", (req: express.Request, res: express.Response) => {
  res.json({ currentBalance });
});

server.listen(PORT, () => {
  console.log("server running on port " + PORT);
});

const transactionHistory: Object[] = [];

const addTransaction = (amount: number, description: string): void => {
  const objTransaction: Object = { amount, description };
  transactionHistory.push(objTransaction);
};
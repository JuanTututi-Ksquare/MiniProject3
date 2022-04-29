const balanceElement = document.querySelector("#current-balance");
const balanceButton = document.querySelector(".balance");
const transactionButton = document.querySelector(".submit");
const descriptionInput = document.querySelector(".desc-input");
const amountInput = document.querySelector(".amount-input");

balanceButton.addEventListener("click", (event) => {;
    getBalance()
});

transactionButton.addEventListener("click", () => createTransaction());

const getBalance = async () => {
    const options = {
        method: "GET",
        headers: { "content-type": "application/json" },
    };
    const data = await fetch("http://localhost:5500/v1/balance", options);
    const res = await data.json();
    changeBalance(res);
};

const clearBalance = async () => {
    const options = {
        method: "POST",
        headers: { "content-type": "application/json" },
    };
    await fetch("http://localhost:5500/v1/clear", options);
};

const createTransaction = async () => {
    const description = descriptionInput.value;
    const balance = +amountInput.value;
    const options = {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ balance, description }),
    };
    await fetch("http://localhost:5500/v1/transaction", options);
    getBalance();
    clearInput();
}

const changeBalance = (res) => {
    balanceElement.innerHTML = "$" + res.currentBalance;
};

const clearInput = () => {
    descriptionInput.value = "";
    amountInput.value = "";
}

window.onload = () => {
    clearBalance();
    getBalance();
};

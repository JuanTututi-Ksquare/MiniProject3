const balanceElement = document.querySelector("#current-balance");
const balanceButton = document.querySelector(".balance");

balanceButton.addEventListener("click", () => getBalance());

const getBalance = async () => {
  const options = {
    method: "GET",
    headers: { "content-type": "application/json" },
    credentials: "omit",
  };
  const data = await fetch("http://localhost:5500/v1/balance", options);
  const res = await data.json();
  changeBalance(res);
};

const clearBalance = async () => {
  const options = {
    method: "POST",
    headers: { "content-type": "application/json" },
    credentials: "omit",
  };
  await fetch("http://localhost:5500/v1/clear", options);
};

const changeBalance = (res) => {
  balanceElement.innerHTML = "$" + res.currentBalance;
};

window.onload = () => {
  clearBalance();
  getBalance();
};

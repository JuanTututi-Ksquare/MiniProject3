const balanceElement = document.querySelector("#current-balance");

const getBalance = async () => {
    const options = {
        method: "GET",
        headers: {'content-type': 'application/json'},
        credentials: "omit"
    }
    const data = await fetch("http://localhost:5500/v1/balance", options);
    console.log(data);
    const res = await data.json();
    console.log(res);
    changeBalance(res);
}

const changeBalance = res => {
    balanceElement.innerHTML = "$" + res.currentBalance;
}

window.onload = () => {
    getBalance();
}
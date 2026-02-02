let price = 19.5;
let cid = [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100]
];

const NOMINALS = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.10,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
};

let changeArray = [];


const cash = document.getElementById("cash");
const changeDue = document.getElementById("change-due");
const button = document.getElementById("purchase-btn");

const cashRegister = () => {
    let change = Number(cash.value) - price;
    if (Number(cash.value) < price) {
        return alert("Customer does not have enough money to purchase the item");
    }
    else if (Number(cash.value) === price) {
        changeDue.textContent = "No change due - customer paid with exact cash";
        return;
    }
    else {
        alert(`Your change is ${change}`);
    }

    let total = 0;

    cid.forEach(amount => {
        let amounts = amount[1];
        total += amounts;
    })

    const cidTotal = Number(total.toFixed(2));

    if (cidTotal < change) {
        return changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
    }

    if (cidTotal === change) {
        let closed = "Status: CLOSED\n";
        cid.forEach(([name, amount]) => {
            if (amount > 0) {
                closed += `${name}: $${amount.toFixed(2)}\n`;
            }
        });

        changeDue.textContent = closed;
        return;
    }


    changeArray = [];

    cid.slice().reverse().forEach(item => {
        let name = item[0];
        let nameAmount = item[1];
        let unitVal = NOMINALS[name];
        let amountToReturn = 0;
        if (unitVal <= change && nameAmount > 0) {
            while (change >= unitVal && nameAmount >= unitVal) {
                change -= unitVal;
                nameAmount -= unitVal;
                amountToReturn += unitVal;
                change = Number(change.toFixed(2));
            }
            if (amountToReturn > 0) {
                changeArray.push([name, Number(amountToReturn.toFixed(2))]);
            }
        }
    })

    if (change > 0) {
        return changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
    }
    else {
        let resultText = "Status: OPEN\n";
        changeArray.forEach(([name, amount]) => {
            resultText += `${name}: $${amount.toFixed(2)}\n`;
        })

        changeDue.textContent = resultText;
    }
}

button.addEventListener("click", cashRegister);

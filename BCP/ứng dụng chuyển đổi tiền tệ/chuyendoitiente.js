const price = {
  VND: 23000,
  USD: 1,
  Yen: 106,
};
const amount = document.getElementById("amount");
const from = document.getElementById("from");
const to = document.getElementById("to");
const result = document.getElementById("result");

function convert() {
  console.log(amount, from, to);
  result.innerHTML = (
    (amount.value * price[to.value]) /
    price[from.value]
  ).toFixed(2);
}

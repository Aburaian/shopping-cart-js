function numberValue(products, price, isAdded) {
    let numberAdded = document.getElementById(products + "-number");
    let number = numberAdded.value;
    if (isAdded == true) {
        numberAdded.value = Number(number) + 1;

    } else if (number > 0) {
        numberAdded.value = Number(number) - 1;
    }
    document.getElementById(products + "-added").innerText = numberAdded.value * price;
    calculateTotal();

}

// value added

function added() {
    numberValue("value", 59, true)


}

function minus() {
    numberValue("value", 59, false)

}

// phone added

function phoneAdded() {
    numberValue("phone", 1219, true)


}

function phoneMinus() {
    numberValue("phone", 1219, false)



}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal() {
    const phoneTotal = getInputValue("phone") * 1219;
    const valueTotal = getInputValue("value") * 59;
    const subTotal = phoneTotal + valueTotal;
    const tax = subTotal / 10;
    const totalAmount = subTotal + tax;
    document.getElementById("sub-total").innerText = subTotal;
    document.getElementById("tax").innerText = tax;
    document.getElementById("total-amount").innerText = totalAmount;
}
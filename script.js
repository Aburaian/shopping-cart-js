function numberValue(added) {
    let numberAdded = document.getElementById("number-value");
    let number = numberAdded.value;
    if (added == true) {
        numberAdded.value = Number(number) + 1;

    } else if (number > 0) {
        numberAdded.value = Number(number) - 1;
    }

}

function added() {
    numberValue(true)


}

function minus() {
    numberValue(false)

}
// three items on your biil, add them up and add a 7% sales take - function that accepts three numbers

function billAdd(item1, item2, item3) {
    var total = item1 + item2 + item3;
    var tax = total * .07;
    var totalTax = total + tax;
    return totalTax.toFixed(2);
}

console.log(billAdd(20.52, 9.27, 11.99));

// - hacker level add 15% tip and accept an array of undetermined amount of items

function tipEm(arr) {
    var total = 0;
    for (var i=0; i<arr.length; i++) {
        total += arr[i];
    }
    var tax = total * .07;
    var tip = total * .15;
    var withTip = tax + tip + total;
    return withTip.toFixed(2);
}

console.log(tipEm([20.33, 9.27, 11.99]));



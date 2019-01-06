// three items on your biil, add them up and add a 7% sales take - function that accepts three numbers

function billAdd(item1, item2, item3) {
    var total = item1 + item2 + item3;
    var tax = total * .07;
    var totalTax = total + tax;
    return totalTax.toFixed(2);
}

console.log(billAdd(20.52, 9.27, 11.99));

// - hacker level add a dynamic tip amount and accept an array of undetermined amount of items

function tipEm(arr, tip) {
    var total = 0;
    for (var i=0; i<arr.length; i++) {
        total += arr[i];
    }
    var tax = total * .07;
    var tip = tip * .01;
    tip = total * tip;
    var withTip = tax + tip + total;
    return withTip.toFixed(2);
}

console.log(tipEm([20.33, 9.27, 11.99], 20));


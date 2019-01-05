// three items on your biil, add them up and add a 7% sales take - function that accepts three numbers

function billAdd(item1, item2, item3) {
    var total = item1 + item2 + item3;
    var tax = total * .07;
    var totalTax = total + tax;
    return totalTax;
};

console.log(billAdd(20, 9, 11));

// - hacker level add 15% tip

function tipEm(arr) {
    var total = 0;
    for (var i=0; i<arr.length; i++) {
        total += arr[i];
    }
    var tax = total * .07;
    var tip = total * .15;
    var withTip = tax + tip + total;
    return withTip;
};

console.log(tipEm([20, 9, 11]));



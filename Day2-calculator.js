// Day 2 - Simple Calculator

function calculator(num1, num2, operator) {
    let result;

    if (operator == '+') {
        result = num1 + num2;
    } 
    else if (operator == '-') {
        result = num1 - num2;
    } 
    else if (operator == '*') {
        result = num1 * num2;
    } 
    else if (operator == '/') {
        if (num2 != 0) {
            result = num1 / num2;
        } else {
            result = "Error: Cannot divide by zero";
        }
    } 
    else {
        result = "Invalid operator";
    }

    return result;
}

// Testing the calculator
console.log("5 + 3 = " + calculator(5, 3, '+'));
console.log("10 - 4 = " + calculator(10, 4, '-'));
console.log("6 * 7 = " + calculator(6, 7, '*'));
console.log("20 / 5 = " + calculator(20, 5, '/'));
function calculator() {
    
    let operator = prompt("Choose an operator:\n1. Addition (+)\n2. Subtraction (-)\n3. Multiplication (*)\n4. Division (/)");


    if (!["1", "2", "3", "4"].includes(operator)) {
        alert("Invalid operator selection. Please refresh and try again.");
        return;
    }


    switch (operator) {
        case "1":
            operator = "+";
            break;
        case "2":
            operator = "-";
            break;
        case "3":
            operator = "*";
            break;
        case "4":
            operator = "/";
            break;
    }

    let num1 = parseFloat(prompt("Enter the first number:"));
    if (isNaN(num1)) {
        alert("Invalid input. Please refresh and enter valid numbers.");
        return;
    }


    let num2 = parseFloat(prompt("Enter the second number:"));
    if (isNaN(num2)) {
        alert("Invalid input. Please refresh and enter valid numbers.");
        return;
    }

    let result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                alert("Division by zero is not allowed. Please refresh and enter valid numbers.");
                return;
            }
            result = num1 / num2;
            break;
    }

   
    alert("Result: " + result);
}


calculator();

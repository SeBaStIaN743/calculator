// Game plan: Make a function that shows the string result on the result panel when equal button is pressed
// The equation panel should update immediately
// When the * button is pressed the second variable should be worked on
// There is a limit for each number

//const hello = () => {console.log("dumb dumb")}
//const ce = document.getElementById("ce");
//ce.addEventListener("click", hello); 

//Declare variables for logistics
let number_number = 1;
let first_number = "";
let second_number = "";
let operator = "";
let equation = "";
let result = "";
let first_number_decimal = false;
let second_number_decimal = false;
//Declare individual variables for result and equation
const equation_text = document.getElementById("equation_text");
const result_text = document.getElementById("result_text");

//Declare variables for operators

let ce = document.getElementById("ce");
let plus_minus = document.getElementById("+/-");
let modulo = document.getElementById("%");
let division = document.getElementById("/");
let multiplication = document.getElementById("*");
let subtraction = document.getElementById("-");
let addition = document.getElementById("+");
let equals = document.getElementById("=");
let decimal_point = document.getElementById(".");

//Update equation fuction for global use

const updateEquation = () => {
    equation = first_number + operator + second_number;
    equation_text.innerHTML = equation;
}

//Number functions for global use

const numberEditor = (number) => {

    if(number_number===1) {
        first_number += number
    } else if(number_number===2) {
        second_number += number
    } else {
        alert("This calculator can only operate on two numbers")
    }

    updateEquation()
}

//OnClickListener function for global number use

const parameterClickHandler = (id, wanted_function) => {
    const handleClick = () => {wanted_function(id)}
    const clickTarget = document.getElementById(id);
    clickTarget.addEventListener("click", handleClick); 
}

//OnClickListener function for no-parameter functions

const noParameterClick = (id, wanted_function) => {
    const handleClick = () => {wanted_function()}
    const clickTarget = document.getElementById(id)
    clickTarget.addEventListener("click", handleClick)
}

// Operator function

const operatorHandler = (target_operator) => {
    if(number_number===1) {
        operator += target_operator
        number_number += 1
        updateEquation()
    } else {
        alert("This calculator can only operate on two numbers")
    }
}

//Decimal point function

const decimalOperator = () => {
    if(number_number===1 && first_number_decimal===false) {
        first_number += "."
        first_number_decimal = true
    } else if(number_number===2 && second_number_decimal===false) {
        second_number += "."
        second_number_decimal = true
    } else if (number_number != 1 && number_number != 2) {
        alert("This calculator can only operate on two numbers")
    } else {
        alert("You have tried to use too many decimal points")
    }

    updateEquation()
}

//Clear function, It has a parameter because clickHandler puts in a parameter regardless of the function

let ce_function = () => {
    number_number = 1;
    first_number = "";
    second_number = "";
    operator = "";
    equation = "";
    result = "";
    first_number_decimal = false;
    second_number_decimal = false;

    equation_text.innerHTML=equation
    result_text.innerHTML=result
}

// Plus or minus function

const plus_minus_function = () => {
    if(number_number===1) {
        first_number = Number(first_number)
        first_number *= -1
        first_number = first_number.toString()
    } else {
        second_number = Number(second_number)
        second_number *= -1
        second_number = second_number.toString()
    }

    updateEquation()
}

//Equals function 

const equals_function = () => {
    first_number = Number(first_number)
    second_number = Number(second_number)
    switch(operator) {
        case "+":
            result = first_number + second_number
            break
        case "-":
            result = first_number - second_number
            break
        case "*":
            result = first_number * second_number
            break
        case "/":
            result = first_number / second_number
            break
        case "%":
            result = first_number % second_number
            break
    }
    updateEquation()
    result_text.innerHTML = result
}

//Add Event Listeners for numbers

parameterClickHandler("0", numberEditor)
parameterClickHandler("1", numberEditor)
parameterClickHandler("2", numberEditor)
parameterClickHandler("3", numberEditor)
parameterClickHandler("4", numberEditor)
parameterClickHandler("5", numberEditor)
parameterClickHandler("6", numberEditor)
parameterClickHandler("7", numberEditor)
parameterClickHandler("8", numberEditor)
parameterClickHandler("9", numberEditor)

//Add Event Listeners for operators without parameters
noParameterClick("ce", ce_function)
noParameterClick("+/-", plus_minus_function)
noParameterClick(".", decimalOperator)

//Add Event Listeners for operators with parameters

parameterClickHandler("+", operatorHandler);
parameterClickHandler("-", operatorHandler);
parameterClickHandler("*", operatorHandler);
parameterClickHandler("/", operatorHandler);
parameterClickHandler("%", operatorHandler);

//equals function

noParameterClick("=", equals_function);
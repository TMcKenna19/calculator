// Calculator Logic


const display = document.getElementById("display");

// appendDisplay
function appendDisplay(input) {
    display.value += input;
}

// calculate
function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "Error";
    }
}

// clearDisplay 
function clearDisplay() {
    display.value = "";
}





let display = document.getElementById("display");

function addValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

document.addEventListener("keydown", function(event) {

    event.preventDefault();


    if ("0123456789+-*/.".includes(event.key)) {
        addValue(event.key);
    }

    
    else if (event.key === "Enter") {
        calculate();
    }

    
    else if (event.key === "Escape") {
        clearDisplay();
    }

    
    else if (event.key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }
});
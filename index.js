let display = '';
let isEqual = 0;

const calculatorDisplay = document.getElementsByClassName('display');

function Delete() {
    let last = display.charAt(display.length - 1);
    lastCheck = Number(last);
    if (display == 'error') {
        display = '';
        updateDisplay();
        return;
    }
    if (display == '') {
        return;
    }
    else if (last == '.') {
        display = display.slice(0,-1);
        updateDisplay();
    }
    else if (isNaN(lastCheck)) {
        display = display.slice(0,-2);
        updateDisplay();
    }
    else {
        display = display.slice(0,-1);
        updateDisplay();
    }
    last = display.charAt(display.length -1);
    if (last == ' ') {
        display = display.slice(0,-1);
    }
}

function Clear () {
    display = '';
    updateDisplay();
}

function append (e) {
    let last = display.charAt(display.length - 1);
    lastCheck = Number(last);
    if (typeof e == 'string') { //a sting was input
        if (isEqual == 1) {
            if (isNaN(lastCheck)) {
                return;
            }
            isEqual = 0;
        }
        if (display == '') {
            return;
        }
        else if (last == '.') {
            display = display.slice(0,-1) + ' ' + e;
            updateDisplay();
        }
        else if (isNaN(lastCheck) && e == '.') {
            display = display + ' 0.';
            updateDisplay();
        }
        else if (isNaN(lastCheck)) {
            display = display.slice(0,-1) + e;
            updateDisplay();
        }
        else if (e == '.') {
            display = display + e;
            updateDisplay();
        }
        else {
            display = display + ' ' + e;
            updateDisplay();
        }
    }
    else {
        if (isEqual == 1) {
            isEqual = 0;
            display = '';
            last = '';
            lastCheck = Number(last);
        }
        if (last == '.') {
            display = display + e;
            updateDisplay();
        }
        else if (isNaN(lastCheck)) {
            display = display + ' ' + e;
            updateDisplay();
        }
        else {
            display = display + e;
            updateDisplay();
        } 
    }
}

function equals () {
    while (display.includes('^')) {
        display = display.replace('^','**');
    }
    display = display.replace('^','**');
    display = eval(display);
    let temp = display;
    display = display.toString();
    if (display.includes('.') == true) {
        display = temp.toFixed(2);
        display = display.toString();
    }
    isEqual = 1;
    if (display.length > 11) {
        display = 'error'
    }
    else if (display == 'Infinity') {
        display = 'error';
    }
    else if (isNaN(display)) {
        display = 'error';
    }
    
    updateDisplay();
}

function updateDisplay() {
    let temp = display;
    if (display == '') {
        temp = 0;
    }
    calculatorDisplay[0].innerText = temp;
}
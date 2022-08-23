const numberbutton = document.querySelectorAll(['data-number']);
const deletebutton = document.querySelectorAll(['data-delete']);
const operationbutton = document.querySelectorAll(['data-operation']);
const equalsbutton = document.querySelectorAll(['data-equals']);
const all_clearbutton = document.querySelectorAll(['data-delete']);
const previous_output = document.querySelectorAll(['data-previous-output']);
const current_output = document.querySelectorAll(['data-current-output']);
const calculator = new Calculator (previous_output, current_output)

numberbutton.forEach(button => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerHTML)
        calculator.updateDisplay()
    })
})

class Calculator {
    constructor(previous_output, current_output) {
        this.previous_output = current_output;
        this.current_output = previous_output;
        this.clear()
    }

    clear () {
        this.current_output = "";
        this.previous_output = "";
        this.operation  = undefined;
    }

    delete () {

    }

    appendNumber (number) {
        if (number  === '.'&& this.current_output.includes('.')) return;
        this.current_output = this.current_output.toString() + numberbutton.toString()

    }

    chooseOperation (operation) {

    }

    compute () {

    }

    updateDisplay () {
        this.current_output.innerText = this.current_output;

    }

    

    
    
    

}
document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', () => handleButtonClick(button.dataset.value));
    });

    function handleButtonClick(value) {
        switch (value) {
            case '=':
                calculateResult();
                break;
            case 'C':
                clearDisplay();
                break;
            case 'DEL':
                deleteLastChar();
                break;
            case '+/-':
                toggleSign();
                break;
            case '%':
                findPercentage();
            default:
                appendToDisplay(value);
        }
    }

    function appendToDisplay(value) {
        display.value += value;
    }

    function calculateResult() {
        try {
            let expression = display.value.replace(/x/g, '*');
            display.value = new Function('return ' + expression)();
        } catch (error) {
            display.value = 'Error';
        }
    }

    function clearDisplay() {
        display.value = '';
    }

    function deleteLastChar() {
        display.value = display.value.slice(0, -1);
    }

    function toggleSign() {
        if (display.value !== '') {
            display.value = parseFloat(display.value) * -1;
        }
    }

    function findPercentage(){
        if(display.value!==''){
            display.value = parseFloat((display.value)/100);
        }
    }
});

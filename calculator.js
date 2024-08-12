// let buttons = document.getElementsByClassName('btn');
// console.log(buttons);
let buttons = document.querySelectorAll("button.btn");
let screen = document.getElementById("screen")
let str = "";
let displayStr = "";
let tempStr = "";
let arr = [];
let finalRes = 0;
let postFixValue = [];
let i = 0;
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        switch (e.target.value) {
            case '+': {
                arr[i++] = str;
                arr[i++] = '+';
                displayStr += "+";
                str = "";
                screen.innerText = displayStr;
                break;
            }
            case '-': {
                arr[i++] = str;
                arr[i++] = '-';
                displayStr += "-";
                str = "";
                screen.innerText = displayStr;
                break;
            }
            case '*': {
                arr[i++] = str;
                arr[i++] = '*';
                displayStr += "*";
                str = "";
                screen.innerText = displayStr;
                break;
            }
            case '/': {
                arr[i++] = str;
                arr[i++] = '/';
                displayStr += "/";
                str = "";
                screen.innerText = displayStr;
                break;
            }
            case '(': {
                arr[i++] = '(';
                displayStr += "(";
                str = "";
                screen.innerText = displayStr;
                break;
            }
            case ')': {
                arr[i++] = str;
                displayStr += ")";
                str = ")";
                screen.innerText = displayStr;
                break;
            }
            case '=': {
                arr[i++] = str;
                str = "";
                displayStr = "";
                postFixValue = infixToPostfix(arr);
                finalRes = evaluatePostfix(postFixValue);
                screen.innerText = finalRes;
                arr = [];
                i = 0;
                break;
            }
            case 'c': {
                arr = [];
                i = 0;
                str = "";
                displayStr = "";
                finalRes = 0;
                screen.innerText = 0;
                break;
            }
            default: {
                str += e.target.value;
                tempStr = e.target.value;
                displayStr += tempStr;
                screen.innerText = displayStr;
                tempStr = "";
            }
        }
    })
})


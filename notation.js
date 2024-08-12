let stack = [], top1 = -1;

function push(val) {
    top1++;
    stack[top1] = val;
}

function pop() {
    if (stack[top1] == -1) {
        return 0;
    }
    else {
        let poppedVal = stack[top1];
        top1--;
        return poppedVal;
    }
}

function operator(op) {
    switch (op) {
        case '+':
        case '-':
        case '*':
        case '/':
        case '(':
        case ')':
        case '^': {
            return 1;
            break;
        }
        default:
            return 0;
    }
}

function precedence(op) {
    switch (op) {
        case '+':
        case '-': {
            return 2;
            break;
        }
        case '*':
        case '/': {
            return 3;
            break;
        }
        case '^': {
            return 4;
            break;
        }
        case '(':
        case ')':
        case '#': {
            return 1;
            break;
        }
    }
}

function infixToPostfix(infixArr) {
    let i;
    let val;
    let postFix = [];
    let k = 0;
    stack[++top1] = '#';
    for (i = 0; i < infixArr.length; i++) {
        val = infixArr[i];

        if (operator(val) == 0) {

            postFix[k] = val;
            k++;
        } else {
            if (val == '(') {
                push(val);
            }
            else if (val == ')') {
                while (stack[top1] != '(') {
                    postFix[k] = pop();
                    k++;
                }
                pop();
            }
            else {
                if (precedence(val) > precedence(stack[top1])) {
                    push(val);
                } else {
                    while (precedence(val) <= precedence(stack[top1])) {
                        postFix[k] = pop();
                        k++;
                    }
                    push(val);
                }
            }
        }
    }
    while (stack[top1] != '#') {
        postFix[k] = pop();
        k++;
    }
    return postFix;
}

// let arr1 = ['(', 'a', '+', 'b', ')', '*', '(', 'c', '+', 'd', ')', '*', 'e', '+', 'f', '/', 'g'];
// let arr1 = ['a', '+', 'b'];
// let result = infixToPostfix(arr1);
// console.log(result);


// for calcultion of postfix notation

let stack2 = [];
let top2 = -1;

function push2(val) {
    top2++;
    stack2[top2] = val;
}

function pop2() {
    if (top2 == -1) {
        return 0;
    } else {
        poppedVal2 = stack2[top2];
        top2--;
        return poppedVal2;
    }
}

function evaluatePostfix(arr) {
    let i = 0;
    let operand1;
    let operand2;
    while ((ch = arr[i++]) != null) {

        switch (ch) {
            case '+': {
                operand2 = pop2();
                operand1 = pop2();
                push2(operand1 + operand2);
                break;
            }
            case '-': {
                operand2 = pop2();
                operand1 = pop2();
                push2(operand1 - operand2);
                break;
            }
            case '/': {
                operand2 = pop2();
                operand1 = pop2();
                push2(operand1 / operand2);
                break;
            }
            case '*': {
                operand2 = pop2();
                operand1 = pop2();
                push2(operand1 * operand2);
                break;
            }
            default: {
                push2(Number(ch));
                break;
            }
        }
    }
    return stack2[top2];
}

// let res = evaluatePostfix(['a', 'b', '+', 'c', 'd', '+', '*', 'f', 'g', '/', '+']);
// let res = evaluatePostfix(['2', '3', '+', '8', '8', '+', '*', '6', '*', '4', '6', '/', '+']);
// console.log(res);

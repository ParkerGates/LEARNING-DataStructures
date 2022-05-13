/**
Write a javascript program that takes in a string that 
contains a Reverse Polish Notation expression and 
returns the result of the expression. Use your stack 
and queue implementation to help you with the algorithm.

Examples:
    Input: 4 5 *
    Result: 20
    Input: 3 5 10 + * 
    Result: 45

Note: the expression will always have space separated 
      inputs like "4 5 *" rather than "45*" or "4 4*"
 */

function rpn(expression) {
    // split the expression into individual items
    const items = expression.split(' ');
    // create a queue and stack
    const operands = new Stack();
    const operators = new Queue();
    // loop through the items and push operands to the stack
    // and enqueue operators in the queue
    items.forEach(item => {
        if(isNaN(item)) {
            operators.enqueue(item);
        }
        else {
            operands.push(+item);
        }
    })

    // in a loop:
    while(operators.peek()) {
        // dequeue and operator and two operands
        const operator = operators.dequeue();
        const operand1 = operands.pop();
        const operand2 = operands.pop();
        // create variable that will hold our result
        let result;
        // switch on the operator to know which operation to do
        switch (operator) {
            case '+':
                result = operand1 + operand2;
                break;
            case '-':
                result = operand1 - operand2;
                break;
            case '*':
                result = operand1 * operand2;
                break;
            case '/':
                result = operand1 / operand2;
                break;
        }
        //   push the result back into the stack
        operands.push(result);
    }
    // once there are no more operators then return the 
    // top of the stack
    return operands.pop();
}

rpn('3 5 10 + *');

// Operator class to instantiate
class Operator {
    constructor(operation) {
        this.operation = operation;
    }

    performOperation(a, b) {
        switch (this.operation) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return a / b;
            default:
                throw new Error('Unsupported operation');
        }
    }
}

// Usage
const additionOperator = new Operator('+');
const result = additionOperator.performOperation(5, 3); // Outputs: 8
console.log(result);

// activity 1

const runFive = (str) => {
    for (i = 0; i < 5; i++) {
    console.log(str);
}
};
const runOnce = (str, fn) => {
    fn(str);
};

runOnce("Hello Codenation", runFive);

// activity 2

let arrNum = [2, 5, 10, 20, 400];

const multiThree = (input) => {
    return input.map(x => x * 3);
};


// Activity 3

const add = (a, b) => {
    return a + b;
};
const subtract = (a, b) => {
    return a -b;
};
const multiply = (a, b) => {
    return a * b;
};
const divide = (a, b) => {
    return a / b;
};

const doMaths = (num1) => {
    return (num2, fn) => {
        return fn(num1, num2);
    }
};

console.log(doMaths(12));
console.log(doMaths(12)(10, add))
console.log(doMaths(12)(10, divide))
console.log(doMaths(12)(10, multiply))
console.log(doMaths(12)(10, subtract))





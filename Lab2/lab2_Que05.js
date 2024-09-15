var array = [1, 2, 3, 4];

const initialValueSum = 0;
const initialValueProduct = 1;

const calculateSum = array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, initialValueSum);

const calculateProduct = array.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
}, initialValueProduct);

console.log(`Sum of Numbers: ${calculateSum}`); 
console.log("---------------");
console.log(`Product of Numbers: ${calculateProduct}`);

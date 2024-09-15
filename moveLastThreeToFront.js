//
function right(str) {
    if (str.length >= 3) {
        return str.slice(-3) + str.slice(0, -3);
    }
    return str;
}

console.log(right('Python'));     
console.log(right('JavaScript')); 
console.log(right('Hi'));       

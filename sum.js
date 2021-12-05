let s = parseInt(prompt("Enter first number:"));
let d = parseInt(prompt("Enter second number:"));
let sum = function(s) {
    let b = function(d) {
        let add = s + d;
        console.log(add);
    }
    return b;
}
sum(s)(d);

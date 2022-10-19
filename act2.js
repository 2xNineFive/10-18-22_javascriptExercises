

function calculate(num1, num2) {
    let sumNums = (num1 + num2);
    if (sumNums >= 50 && sumNums <=80) {
        return 65;
    } 
    else {
        return 80;
    }
}

console.log(calculate(12, 24));
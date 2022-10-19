// Activity - Sum of Given Integers
// Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80



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
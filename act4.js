// Activity - Vowel
// Write a program which will check whether a letter is a vowel or not. 
// If the letter is vowel then print true else print false.

// function isVowel(letter) {
// }

// And you call it like this:

//   console.log(isVowel("a")) // true  
//   console.log(isVowel("c")) // false
//   console.log(isVowel("e")) // true 

function isVowel(letter) {
    let phrase = " is a vowel.";
    // let notPhrase = " is not a vowel";
    
    if (letter === "a") {
        console.log("a" + phrase);
        return true;
    } 
    
    else if (letter === "e") {
        console.log("e" + phrase);
        return true;
    }
    
    else if (letter === "i") {
        console.log("i" + phrase);
        return true;
    }
    
    else if (letter === "o") {
        console.log("o" + phrase);
        return true;
    }
    
    else if (letter === "u") {
        console.log("u" + phrase);
        return true;
    }

    else {
        console.log(letter + phrase);
        return false;
    }


}

console.log(isVowel("a"));
console.log(isVowel("b"));
console.log(isVowel("c"));
console.log(isVowel("d"));
console.log(isVowel("e"));
console.log(isVowel("f"));
console.log(isVowel("g"));
console.log(isVowel("h"));
console.log(isVowel("i"));
console.log(isVowel("j"));
console.log(isVowel("k"));
console.log(isVowel("l"));
console.log(isVowel("m"));
console.log(isVowel("n"));
console.log(isVowel("o"));
console.log(isVowel("p"));
console.log(isVowel("q"));
console.log(isVowel("r"));
console.log(isVowel("s"));
console.log(isVowel("t"));
console.log(isVowel("u"));
console.log(isVowel("v"));
console.log(isVowel("w"));
console.log(isVowel("x"));
console.log(isVowel("y"));
console.log(isVowel("z"));
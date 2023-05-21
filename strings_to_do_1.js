// Create a function that, given a string, returns all of that string’s contents, but without blanks. 

// Examples:

// removeBlanks(" Pl ayTha tF u nkyM usi c ") => "PlayThatFunkyMusic"
// removeBlanks("I can not BELIEVE it's not BUTTER") => "IcannotBELIEVEit'snotBUTTER"

function removeBlanks(str) {
    let newStr = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] != ' ') {
            newStr += str[i]
        }
    }
    return newStr
}

console.log(removeBlanks("Pl ayTha tF u nkyM usi c"))


// Create a JavaScript function that given a string, returns the integer made from the string’s digits. You are allowed to use isNaN() and Number().

// Examples:

// getDigits("abc8c0d1ngd0j0!8") => 801008

// getDigits("0s1a3y5w7h9a2t4?6!8?0") => 1357924680

function getDigits(str) {
    let digits = '';
    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);
        if (!isNaN(Number(char))) {
            digits += char;
        }
    }
    return Number(digits);
}

console.log(getDigits("abc8c0d1ngd0j0!8")); // Output: 801008
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0")); // Output: 1357924680


// Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized). You are allowed to use .split() and .toUpperCase().

// acronym(" there's no free lunch - gotta pay yer way. ") => "TNFL-GPYW". 

// acronym("Live from New York, it's Saturday Night!") => "LFNYISN".

function acronym(str) {
    const words = str.trim().split(/\s+/);
    let acronym = '';

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (word.length > 0) {
            acronym += word.charAt(0).toUpperCase();
        }
    }

    return acronym;
}

console.log(acronym(" there's no free lunch - gotta pay yer way. ")); // Output: "TNFL-GPYW"
console.log(acronym("Live from New York, it's Saturday Night!")); // Output: "LFNYISN"




// Create a function that, given a string, returns the number of non-space characters found in the string. 

// Examples:

// countNonSpaces("Honey pie, you are driving me crazy") => 29
// countNonSpaces("Hello world !") => 11

function countNonSpaces(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            count++;
        }
    }

    return count;
}

console.log(countNonSpaces("Honey pie, you are driving me crazy")); // Output: 29
console.log(countNonSpaces("Hello world !")); // Output: 11



// Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.

// Examples:

// removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) => ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
// removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3) => ['There', 'bug', 'the', 'system']

function removeShorterStrings(arr, minLength) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= minLength) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4));
// Output: ['Good morning', 'sunshine', 'Earth', 'says', 'hello']

console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3));
// Output: ['There', 'bug', 'the', 'system']

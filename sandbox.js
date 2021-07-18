const capitalizeString = (string) => {
    return string.toUpperCase();
}

const reverseString = (string) => {
    let reversedString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }
    return reversedString
}

const calculator = {
    sum: (a,b) => {
        if(!isNaN(a) && !isNaN(b)) {
            return a + b
        }
    },
    subtract: (a,b) => {
        if(!isNaN(a) && !isNaN(b)) {
            return a - b
        }
    },
    multiply: (a,b) => {
        if(!isNaN(a) && !isNaN(b)) {
            return a * b
        }
    },
    division: (a,b) => {
        if( a === 0 && b === 0) {
            throw Error ('Invalid division - 0/0');
        }
        if(!isNaN(a) && !isNaN(b)) {
            return a / b
        }
    }
}

const caesar = (text, offset) => {
    const arrayOfOriginalAscii = [];
    const arrayOfCipheredAscii = [];
    // convert original text to ascii array
    for (const letter of text) {
        arrayOfOriginalAscii.push(letter.charCodeAt());
    }
    arrayOfOriginalAscii.forEach(ascii => {
        // if small letter
        if(ascii >= 97 && ascii <= 122) {
            for (let i = 0; i < offset; i++) {
                ascii++;
                if(ascii === 123) {
                    ascii = 97
                }
            }
            arrayOfCipheredAscii.push(ascii);
        }
        // if big letter
        else if(ascii >= 65 && ascii <= 90) {
            for (let i = 0; i < offset; i++) {
                ascii++;
                if(ascii === 91) {
                    ascii = 65
                }
            }
            arrayOfCipheredAscii.push(ascii);
        }
        // if not a letter
        else {
            arrayOfCipheredAscii.push(ascii);
        }
    });
    const arrayOfChipheredLetters = [];
    for (const ascii of arrayOfCipheredAscii) {
        arrayOfChipheredLetters.push(String.fromCharCode(ascii));
    }

    let finalOutputText = '';
    for (const letter of arrayOfChipheredLetters) {
        finalOutputText += letter;
    }
    return finalOutputText;
}

const arrayAnalysis = ([...array]) => {
    let length = array.length;
    let average = array.reduce( (acc,current) => { return acc + current } ) / length ;
    let min = Math.min(...array);
    let max = Math.max(...array);
    return object = {
        average: average,
        min: min,
        max: max,
        length: length
    }
}

module.exports = {
    capitalizeString,
    reverseString,
    calculator,
    caesar,
    arrayAnalysis
    }
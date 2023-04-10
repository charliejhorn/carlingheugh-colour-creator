const string = "carlingheugh"
let alphabet = "abcdefghijklmnopqrstuvwxyz".split('')
alphabet = alphabet.reverse()

const arrayAvg = (array) => {
    let sum = array.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
    )
    let avg = sum / array.length
    return avg
}

const hexCode = (str) => {
    let hexNum = str.toString(16);
    if (hexNum.length === 1) {
        hexNum = "0" + hexNum;
    }
    return hexNum;
}

const coolorsURL = (hexCodes) => {
    let type = typeof hexCodes
    if(type === "string") {
        return `https://coolors.co/${hexCodes}`;
    } else if(type === "object") {
        let url = 'https://coolors.co/'
        for(let index = 0; index < hexCodes.length; index++) {
            url += hexCodes[index];
            if(index !== hexCodes.length - 1) {
                url += '-';
            }
        }
        return url;
    }
}


console.log('rgb', createColourRGB(string));
console.log('hex', coolorsURL(createColourHEX(string)));


function createColourRGB (str) {
    // turn string into array
    const input = str.split('')
    const rgb = [];
    let subStr;
    const third = str.length / 3;

    // iterate 3 times for r, g, b
    for(let index = 0; index < 3; index ++) {
        let charValues = [];
        // create a substring of the relevant letters that will be turned into a numerical value
        subStr = input.slice(index * third, (index+1) * third);

        // iterate over subStr
        for(let char of subStr) {
            let charPos = alphabet.indexOf(char);
            let alphaPercent = charPos / 26;
            charValues.push(alphaPercent)
        }

        // get colour value from charValues average
        let colour = Math.round(arrayAvg(charValues) * 255)

        // push colour value to rgb
        rgb.push(colour)
    }

    return rgb
}


function createColourHEX (str) {
    // turn string into array
    const input = str.split('')
    const hex = [];
    let subStr;
    let third = str.length / 3;

    // iterate 3 times for r, g, b
    for(let index = 0; index < 3; index ++) {
        let charValues = [];
        // create a substring of the relevant letters that will be turned into a numerical value
        subStr = input.slice(index * third, (index+1) * third);

        // iterate over subStr
        for(let char of subStr) {
            let charPos = alphabet.indexOf(char);
            let alphaPercent = charPos / 26;
            charValues.push(alphaPercent)
        }

        // get hex numerical value from charValues average
        let hexNum = Math.round(arrayAvg(charValues) * 255)

        // push colour value to rgb
        hex.push(hexCode(hexNum))
    }

    return hex.join('')
}

/* const alphabetPos = (char) => {
    if(typeof char === "string") {
        for(let letter of alphabet) {
            if(char === letter) {
                return alp
            }
        }
    }
} */
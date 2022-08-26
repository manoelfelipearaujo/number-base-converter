const reverseString = str => {
    return str.split("").reverse().join("");
}

const toDec = (number, base) => {

    let result = 0;
    
    // Convert base to int
    base = parseInt(base, 10);

    // Run through each number's digit and sum yhe algorithm's output
    for (let i = 0; i < number.length; i++) {
        result += parseInt(number[i], base) * Math.pow(base, number.length - (i + 1));
    }

    return result;

}

const toBaseN = (number, base, baseN) => {

    let result = "";

    // Convert number to decimal, toDec() returns a string
    number = toDec(number, base);

    // Convert number, base and baseN to int
    number = parseInt(number, 10);
    base = parseInt(base, 10);
    baseN = parseFloat(baseN, 10);

    do {

        // Add hex characters
        switch (number % baseN) {
            case 10:
                result += "A";
                break;
            case 11:
                result += "B";
                break;
            case 12:
                result += "C";
                break;
            case 13:
                result += "D";
                break;
            case 14:
                result += "E";
                break;
            case 15:
                result += "F";
                break;
            default:
                result += (number % baseN).toString();
                break;
        }

        number = Math.floor(number / baseN);

    } while (number !== 0);

    result = reverseString(result);
    return result;

}

const getVal = () => {

    let number, base, baseN;
    number = document.getElementById("number").value;
    base = document.getElementById("base").value;
    baseN = document.getElementById("baseN").value;

    document.getElementById('result').innerHTML = toBaseN(number, base, baseN);

}
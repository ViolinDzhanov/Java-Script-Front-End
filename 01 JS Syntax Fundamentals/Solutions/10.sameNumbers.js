function solve(number) {
    let numberAsString = number.toString();
    let currentDigit = numberAsString[0];
    let isSame = true;
    let sum = Number(currentDigit);

    for (let i = 1; i < numberAsString.length; i++) {
        if (currentDigit !== numberAsString[i]) {
            isSame = false;
        } 

        currentDigit = numberAsString[i];
        sum += Number(currentDigit);
    }

    console.log(isSame);
    console.log(sum);
}


solve(2222222)
function solve(numbers) {
    numbers.sort((a, b) => a - b);
    let result = [];

    while (numbers.length > 0){
        let smallNumber = numbers.shift();
        let bigNumber = numbers.pop();

        result.push(smallNumber);
        result.push(bigNumber);
    }

    return result;
}


console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])); 
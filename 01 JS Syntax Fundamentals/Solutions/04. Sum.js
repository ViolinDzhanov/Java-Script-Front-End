function solve(startNumber, endNumber) {
    let sum = 0;
    let numbers = ''
    for (let i = startNumber; i <= endNumber; i++) {
        sum += i;
        numbers += i + ' ';
    }

    console.log(numbers);
    console.log(`Sum: ${sum}`);
}

solve(0,26)
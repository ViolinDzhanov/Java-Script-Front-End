function solve(input, rotations) {
    for (let i = 0; i < rotations; i++) {
        let firstNumber = input.shift();

        input.push(firstNumber);
    }

    console.log(input.join(', '));
}

solve([32, 21, 61, 1], 4)
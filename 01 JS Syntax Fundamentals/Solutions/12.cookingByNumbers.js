function solve(number, op1, op2, op3, op4, op5) {
        let result = Number(number);
        let operations = op1[0] + op2[0] + op3[0] + op4[0] + op5[0];

        for (let i = 0; i < operations.length; i++) {
            switch (operations[i]) {
                case 'c':
                    result /= 2;
                    console.log(result);
                    break;
                case 'd':
                    result = Math.sqrt(result);
                    console.log(result);
                    break;
                case 's':
                    result += 1;
                    console.log(result);
                    break;
                case 'b':
                    result *= 3;
                    console.log(result);
                    break;
                case 'f':
                    result *= 0.8;
                    console.log(result);
                    break;
            }
        }
    }



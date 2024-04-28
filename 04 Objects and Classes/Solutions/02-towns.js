function solve(input) {
    let towns = [];

    for (const line of input) {
        let townInfo = line.split(' | ');
        let city = {
            town: townInfo[0],
            latitude: Number(townInfo[1]).toFixed(2),
            longitude: Number(townInfo[2]).toFixed(2),
        }

        towns.push(city);
    }

    for (const town of towns) {
        console.log(town);
    }
}

solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
)
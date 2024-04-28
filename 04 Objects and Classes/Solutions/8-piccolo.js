function solve(input) {
    const parkingLot = {};

    for (const row of input) {
        const [direction, carNumber] = row.split(', ');

        direction === 'IN'
            ? parkingLot[carNumber] = true
            : delete parkingLot[carNumber]
    }

    Object.keys(parkingLot)
        .sort((a, b) => a.localeCompare(b))
        .forEach(carNumber => console.log(carNumber));
}
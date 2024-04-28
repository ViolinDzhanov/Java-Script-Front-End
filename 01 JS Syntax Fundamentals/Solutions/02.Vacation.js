function solve(groupCount, groupType, dayOfWeek) {
    let singlePrice = 0;

    if (dayOfWeek === 'Friday') {
        switch (groupType) {
            case 'Students':
                singlePrice = 8.45;
                break;
            case 'Business':
                singlePrice = 10.90;
                break;
            case 'Regular':
                singlePrice = 15;
                break;
        }
    } else if (dayOfWeek === 'Saturday') {
        switch (groupType) {
            case 'Students':
                singlePrice = 9.80;
                break;
            case 'Business':
                singlePrice = 15.6;
                break;
            case 'Regular':
                singlePrice = 20;
                break;
        }
    } else if (dayOfWeek === 'Sunday') {
        switch (groupType) {
            case 'Students':
                singlePrice = 10.46;
                break;
            case 'Business':
                singlePrice = 16;
                break;
            case 'Regular':
                singlePrice = 22.5;
                break;
        }
    }

    let totalPrice = groupCount * singlePrice;

    if (groupType === 'Students' && groupCount >=30){
        totalPrice *= 0.85;
    } else if (groupType === 'Business' && groupCount >= 100){
        totalPrice -= 10 * singlePrice;
    } else if(groupType === 'Regular' && groupCount >= 10 && groupCount <= 20) {
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

function solve(input) {
    const words = {};
    const searchWords = input.shift().split(' ');

    for (const searchWord of searchWords) {
        words[searchWord] = 0;
    }
    
    for (const word of input) {
        if (words.hasOwnProperty(word)) {
            words[word] += 1;
        }
    }

    const sortedWords = Object.entries(words)
        .sort((a, b) => b[1] - a[1]);

    for (const [word, occurrences] of sortedWords) {
        console.log(`${word} - ${occurrences}`)
    }
}
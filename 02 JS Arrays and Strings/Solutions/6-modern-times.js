function solve(text) {
    const regex = /#\b[a-zA-Z]+\b/g;

    const matches = text.match(regex);

    const modifiedWords = matches.map(word => word.slice(1));

    for (const word of modifiedWords) {
        console.log(word);
    }

}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia')
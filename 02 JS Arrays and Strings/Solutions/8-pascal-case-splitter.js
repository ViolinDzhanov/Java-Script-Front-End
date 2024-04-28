function solve(text) {
    const splittedWords = text.split(/(?=[A-Z])/);

    console.log(splittedWords.join(', '));
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan')
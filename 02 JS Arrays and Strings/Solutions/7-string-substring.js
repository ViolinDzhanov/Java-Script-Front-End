function solve(word, text) {
    const regex = new RegExp("\\b" + word + "\\b", "i");
   let result = text.match(regex);

   if (result !== null){
    console.log(word);
   } else {
    console.log(`${word} not found!`);
   }
}

solve('javascript',
'JavaScript is the best programming language'
)
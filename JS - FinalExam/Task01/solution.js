function solve(input) {
    let heroesCount = Number(input.shift());
    let heroes = {};

    for (let i = 0; i < heroesCount; i++) {
        let [name, hitPoints, bullets] = input[i].split(' ');
        
        heroes[name] = {
            hitPoints: Number(hitPoints),
            bullets: Number(bullets),
        }
         
    }
     let comandLine = input.shift();

     while (comandLine != 'Ride Off Into Sunset') {
        let [comand, attackerName, targetName] = comandLine.split(' - ');

        let attacker = heroes[attackerName];
        let target = heroes[targetName];

        console.log(attacker);
        console.log(target);

        comandLine = input.shift();

     }
}



solve(["2",
"Gus 100 0",
"Walt 100 6",
"FireShot - Gus - Bandit",
"TakeHit - Gus - 100 - Bandit",
"Reload - Walt",
"Ride Off Into Sunset"])

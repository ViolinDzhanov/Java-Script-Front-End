
function solve(input) {
    const n = parseInt(input[0]);
    const posse = [];
    
    for (let i = 1; i <= n; i++) {
        const [name, hp, bullets] = input[i].split(' ');
        posse.push({ name, hp: parseInt(hp), bullets: parseInt(bullets) });
    }
    
    for (let i = n + 1; i < input.length; i++) {
        const [command, ...args] = input[i].split(' - ');
        
        switch (command) {
            case 'FireShot':
                fireShot(posse, ...args);
                break;
            case 'TakeHit':
                takeHit(posse, ...args.map(arg => isNaN(parseInt(arg)) ? arg : parseInt(arg)));
                break;
            case 'Reload':
                reload(posse, ...args);
                break;
            case 'PatchUp':
                patchUp(posse, ...args.map(arg => isNaN(parseInt(arg)) ? arg : parseInt(arg)));
                break;
            case 'Ride Off Into Sunset':
                break;
        }
    }
    
    posse.forEach(character => {
        console.log(`${character.name}\n  HP: ${character.hp}\n  Bullets: ${character.bullets}`);
    });

    function fireShot(posse, shooterName, targetName) {
        const shooter = posse.find(character => character.name === shooterName);
        const target = posse.find(character => character.name === targetName);
        if (shooter.bullets > 0) {
            shooter.bullets--;
            console.log(`${shooterName} has successfully hit ${targetName} and now has ${shooter.bullets} bullets!`);
        } else {
            console.log(`${shooterName} doesn't have enough bullets to shoot at ${targetName}!`);
        }
    }
    
    function takeHit(posse, characterName, damage, attacker) {
        const character = posse.find(character => character.name === characterName);
        character.hp -= damage;
        if (character.hp > 0) {
            console.log(`${characterName} took a hit for ${damage} HP from ${attacker} and now has ${character.hp} HP!`);
        } else {
            console.log(`${characterName} was gunned down by ${attacker}!`);
            const index = posse.findIndex(character => character.name === characterName);
            posse.splice(index, 1);
        }
    }
    
    function reload(posse, characterName) {
        const character = posse.find(character => character.name === characterName);
        if (character.bullets < 6) {
            const bulletsReloaded = Math.min(6 - character.bullets, 6); // Reload up to 6 bullets
            character.bullets += bulletsReloaded;
            console.log(`${characterName} reloaded ${bulletsReloaded} bullets!`);
        } else {
            console.log(`${characterName}'s pistol is fully loaded!`);
        }
    }
    
    function patchUp(posse, characterName, amount) {
        const character = posse.find(character => character.name === characterName);
        if (character.hp < 100) {
            const amountRecovered = Math.min(100 - character.hp, amount); // Recover up to remaining HP or amount
            character.hp += amountRecovered;
            console.log(`${characterName} patched up and recovered ${amountRecovered} HP!`);
        } else {
            console.log(`${characterName} is in full health!`);
        }
    }
}


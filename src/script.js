"use strict";

// TODO - write your code here.

const randomDamage = () => {
    return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    
}
console.log(randomDamage());

const chooseOption = (opt1, opt2) => {
    const randNum = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
    const option = randNum < 1 ? opt1 : opt2;
    return option;
}

const attackPlayer = function(health){
    return (health - randomDamage());
}

const logHealth = (player, health) => {
    return console.log(`${player} health: ${health}`);
}

const logDeath = (winner, loser) => {
    return console.log(`${winner} defeated ${loser}`);
}

const isDead = (health) => {
    const dead = health <= 0 ? true : false;
    return dead;
}

function fight(player1, player2, player1Health, player2Health){
    while(true){
    const attacker = chooseOption(player1, player2);
    if (attacker === player1){
        player2Health = attackPlayer(player2Health);
        logHealth(player2, player2Health);
        if (isDead(player2Health)){
            logDeath(player1, player2); 
            break;
        }       
    }
    else {
        player1Health = attackPlayer(player1Health);
        logHealth(player1, player1Health);
        if (isDead(player1Health)){
            logDeath(player2, player1);
            break;
        }
    }
}
}

console.log(fight("Jake", "Ralph", 100, 100));
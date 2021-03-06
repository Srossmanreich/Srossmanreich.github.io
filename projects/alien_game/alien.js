
//ALIEN GAME JAVASCRIPT

//Alien Ship
var alien = {
  name: "Alien",
  health: 100,
  weapons: {
    cannon: 10,
    gun: 5,
    bomb: 40,
  },
  heals: {
    shield_regen: 10,
  },
  defend: {
    shields: false,
  },
};

//Earth Ship
var earth = {
  name: "Earth",
  health: 100,
  weapons: {
    cannon: 10,
    gun: 5,
    bomb: 40,
  },
  heals: {
    shield_regen: 10,
  },
  defend: {
    shields: false,
  },
};

//Attack code
var attack = function(target,attacker){
  var weap = ""
  var check = Math.random();
  if(target.defend.shields == true){
    target.defend.shields = false;
    console.log(attack.name + "'s attack missed! " + target.name + " had their shields up. " + target.name + "'s health is now " + target.health + ".")
  } else {
    if(check < 0.1){
      weap = "bomb"
      target.health -= attacker.weapons.bomb;
    } else if (check > 0.8){
      weap = "cannon"
      target.health -= attacker.weapons.cannon;
    } else {
      weap = "gun"
      target.health -= attacker.weapons.gun;
    };
    console.log(attacker.name + " used their " + weap + " on " + target.name + "; " + target.name + "'s health is now " + target.health + "." );
  };
};

//Heal code
var heal = function(target){
  if(target.defend.shields == true){
    target.defend.shields = false;
  };
  if(target.health == 100){
    console.log(target.name + " is already at full health! " + target.name + "'s health is " + target.health + ".");
  } else {
    target.health += target.heals.shield_regen;
    if(target.health >= 100){
      target.health = 100;
    };
    console.log(target.name + " healed itself " + target.heals.shield_regen + " health. " + target.name + "'s health is " + target.health + ".");
  }
};

//Shield code
var shield = function(target){
  target.defend.shields = true;
  console.log(target.name + "'s shields are now on. " + target.name + "'s health is " + target.health + ".")
}

//Start the game

var startGameCommand = function(){
  
}


/*
//Start the game
answer1 = prompt("Captain Delenn Janeway! We are in dire need of your expert assistance! The aliens have attacked and we need you to defeat them! Will you help (answer \'y\' or \'n\')?");

if (answer1 !== "y"){
  console.log("Oh no! Now the earth will be destroyed :(");
  } else {
    console.log("Great! Get ready to fight! --- REMEMBER: type 'exit' in at any point to leave the game");
  }

while(earth.health > 0 && alien.health > 0){
  
  answer2 = prompt("Will you 'attack', 'heal', or 'defend'?");
  
  if(answer2 == "attack"){
    attack(alien,earth);
  }else if(answer2 == "heal"){
    heal(earth);
  }else if(answer2 == "defend"){
    shield(earth);
  }else if(answer2 == "exit"){
    console.log("Goodbye --- hope you had fun!")
    break
  }else{
    console.log("You have to input 'attack', 'heal', or 'defend'")
  };
  
  if(alien.health <= 0){
    console.log("YES! You've defeated the aliens! Thank you Captain!");
    break
  }
  
  var alien_turn = Math.random();
  
  if(alien_turn <= 0.20){
    heal(alien);
  } else if (alien_turn >= 0.80){
    shield(alien);
  } else {
    attack(earth,alien);
  };
  
  if(earth.health <= 0){
    console.log("Oh no! You've died! You lose and the aliens takeover earth :(");
    break
  };
};
*/





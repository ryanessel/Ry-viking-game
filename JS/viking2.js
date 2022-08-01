



// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
        
    }
        attack = function () {
        return this.strength;
        }
        receiveDamage = function (dmg) {
            this.health -= dmg;
            }
    
}

// Viking
class Viking extends Soldier {
        constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
        }
    receiveDamage = function (dmg) {
        this.health -= dmg;
        if (this.health > 0){
            return dmg;
            // return `${this.name} has received ${dmg} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry = function() {
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier {
        constructor(health, strength) {
        super(health, strength);
       
        }
        receiveDamage = function (dmg) {
           this.health -= dmg;
           if (this.health > 0){
            return dmg;
            //    return `A Saxon has received ${dmg} points of damage`
           } else {
               return `A Saxon has died in combat`
           }
       }
}

class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(vikingObj){
        this.vikingArmy.push(vikingObj);
    }

    addSaxon(saxonObj){
        this.saxonArmy.push(saxonObj);
    }

    removeDeadBodies(whichArmy){
        whichArmy.forEach((eachSoldier, ind) => {
            if(eachSoldier.health <= 0){
                whichArmy.splice(ind, 1);
            }
        });
    }

    generateRandomSoldier(whichArmy){
        let randomSoldierNumber = Math.floor(Math.random() * whichArmy.length);
        let randomSoldier = whichArmy[randomSoldierNumber];
    }

    vikingAttack(){
        let randomVikingNumber = Math.floor(Math.random() * this.vikingArmy.length);
       let randomViking = this.vikingArmy[randomVikingNumber];
       let randomSaxonNumber = Math.floor(Math.random() * this.saxonArmy.length);
       let randomSaxon = this.saxonArmy[randomSaxonNumber];
       console.log(randomSaxon);
       console.log(randomViking);
       let result = randomSaxon.receiveDamage(randomViking.attack());
       this.removeDeadBodies(this.saxonArmy);
       return result;
    }

    saxonAttack(){
        let randomVikingNumber = Math.floor(Math.random() * this.vikingArmy.length);
       let randomViking = this.vikingArmy[randomVikingNumber];
       let randomSaxonNumber = Math.floor(Math.random() * this.saxonArmy.length);
       let randomSaxon = this.saxonArmy[randomSaxonNumber];
       let result = randomViking.receiveDamage(randomSaxon.attack());
       this.removeDeadBodies(this.vikingArmy);
       return result;
    }

    showStatus(){
        if(this.saxonArmy.length == 0){
            return "Vikings have won the war of the century!"
        } else if(this.vikingArmy.length == 0){
            return "Saxons have fought for their lives and survived another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
    
}
// Declaring new War

let thisWar = new War;

let bjorn = new Viking ("Bjorn", 150, 75);
let bo = new Viking ("Bo", 110, 75);
let erik = new Viking ("Erik", 130, 75);
let frode = new Viking ("Frode", 112, 75);
let grom = new Viking ("Grom", 122, 75);

thisWar.addViking(bjorn);
thisWar.addViking(bo);
thisWar.addViking(erik);
thisWar.addViking(frode);
thisWar.addViking(grom);


let saxon1 = new Saxon (50, 31);
let saxon2 = new Saxon (45, 20);
let saxon3 = new Saxon (34, 30);
let saxon4 = new Saxon (52, 10);
let saxon5 = new Saxon (32, 23);


thisWar.addSaxon(saxon1);
thisWar.addSaxon(saxon2);
thisWar.addSaxon(saxon3);
thisWar.addSaxon(saxon4);
thisWar.addSaxon(saxon5);




// Viking Attributes



document.querySelector('#viking1 .npcName').innerText = 'Bjorn';
document.querySelector('#viking2 .npcName').innerText = 'Bo';
document.querySelector('#viking3 .npcName').innerText = 'Erik';
document.querySelector('#viking4 .npcName').innerText = 'Frode';
document.querySelector('#viking5 .npcName').innerText = 'Gorm';

document.querySelector('#viking1 .npcHealth').innerText = bjorn.health;
document.querySelector('#viking2 .npcHealth').innerText = bo.health;
document.querySelector('#viking3 .npcHealth').innerText = erik.health;
document.querySelector('#viking4 .npcHealth').innerText = frode.health
document.querySelector('#viking5 .npcHealth').innerText = grom.health;


document.querySelector('#viking1 .npcStr').innerText = bjorn.strength;
document.querySelector('#viking2 .npcStr').innerText = bo.strength;
document.querySelector('#viking3 .npcStr').innerText = erik.strength;
document.querySelector('#viking4 .npcStr').innerText = frode.strength;
document.querySelector('#viking5 .npcStr').innerText = grom.strength;


// SAXON Attributes

document.querySelector('#saxon1 .npcHealth').innerText = saxon1.health;
document.querySelector('#saxon2 .npcHealth').innerText = saxon2.health;
document.querySelector('#saxon3 .npcHealth').innerText = saxon3.health;
document.querySelector('#saxon4 .npcHealth').innerText = saxon4.health;
document.querySelector('#saxon5 .npcHealth').innerText = saxon5.health;


document.querySelector('#saxon1 .npcStr').innerText = saxon1.strength;
document.querySelector('#saxon2 .npcStr').innerText = saxon2.strength;
document.querySelector('#saxon3 .npcStr').innerText = saxon3.strength;
document.querySelector('#saxon4 .npcStr').innerText = saxon4.strength;
document.querySelector('#saxon5 .npcStr').innerText = saxon5.strength;


//UPDATE STATS FUNCTION

function updateStats () {
//VIKING ARMY

    for (let i =0; i <= 4; i++) { 
        console.log(thisWar.vikingArmy[i].health)
        document.querySelector(`#viking${i+1} .npcHealth`).innerText = thisWar.vikingArmy[i].health;
       
        }
//SAXON ARMY
     for (let i =0; i <= 4; i++) { 
          document.querySelector(`#saxon${i+1} .npcHealth`).innerText = thisWar.saxonArmy[i].health;
           
        }
       

}


// Attack buttons
document.querySelector('#buttonViking').onclick = event => {
   
    // console.log(thisWar.vikingAttack());
    thisWar.vikingAttack();
    // checkSaxonArmyLength();
    updateStats();
 
}


document.querySelector('#buttonSaxon').onclick = event => {

    
    
    // console.log(thisWar.saxonAttack());
    thisWar.saxonAttack();
    updateStats();


}

// function checkSaxonArmyLength (){

//     let saxArmy = thisWar.saxonArmy.length;
//     console.log(saxArmy);
//     return saxArmy;
// }


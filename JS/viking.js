
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
            return `${this.name} has received ${dmg} points of damage`
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
        constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
        }
        receiveDamage = function (dmg) {
           this.health -= dmg;
           if (this.health > 0){
               return `A Saxon has received ${dmg} points of damage`
           } else {
               return `A Saxon has died in combat`
           }
       }
}

let vHealth = 0;
let vStrength = 0;
let vName = ''
let vikingNames = [
    'Addam ','Aegon','Aegor ','Aelinor','Aemma ','Aemon','Aemond',
    'Aenar','Aenys','Aerion','AerysII','Alys ','Alysanne','Baelor',
    'Brynden ','Ceryse ','Daemon','Daena','Daenerys ','Daenys',
    'Daeron','Duncan','Dyanna ','Eleana','Elia ','Elinor ','Helaena',
    'Hugh ','Jacaerys ','Jaehaera','Jaehaerys','Jeyne ','Joffrey ',
    'Jon ','Laenor ','Lucerys ','Maegor','Maekar','Maelor','Myriah ',
    'Naerys','Nettles','Rhaegar','Rhaegel','Rhaego','Rhaella','Rhaelle ',
    'Rhaena','Rhaenyra','Rhaenys','Shiera ','Visenya','Viserys','Alton',
    'Cersei','Cynda','Damon','Darlessa ','Dorna','Ellyn ','Genna','Gerion',
    'Gerold','Jaime','Janei','Jason','Joanna','Johanna','Kevan','Lancel',
    'Loren','Lyman','Martyn','Orson','Reginald','Sansa ','Stafford','Tion',
    'TommenII','Tygett','Tyland','Tyrek','Tyrion','Tysha','Tytos','Tywald',
    'Tywin','Willem','Alek','Zac','Alec','Laz','Alejandro','Ryan'
]

// let vikingArmy = [];
// for (let i=1; i<=5; i++){
// vHealth = Math.floor(Math.random() * 190) + 60;
// vStrength = Math.floor(Math.random() * 145) + 5;
// vName = vikingNames[Math.floor(Math.random() * 93)]
// vikingArmy.push(new Viking(vName, vHealth, vStrength));
// document.querySelector(`#viking${i} .npcName`).innerText = vikingArmy[i-1].name;
// document.querySelector(`#viking${i} .npcHealth`).innerText = vikingArmy[i-1].health;
// document.querySelector(`#viking${i} .npcStr`).innerText = vikingArmy[i-1].strength;
// }

// for (let i=0; i<=4; i++){
// document.querySelector(`#viking${i+1} .npcName`).innerText = vikingArmy[i].name;
// }

// let saxonArmy = [];
// for (let i=1; i<=5; i++){
// vHealth = Math.floor(Math.random() * 80) + 80;
// vStrength = Math.floor(Math.random() * 50) + 20;
// saxonArmy.push(new Saxon(`Saxon${i}`, vHealth, vStrength))
// document.querySelector(`#saxon${i} .npcHealth`).innerText = saxonArmy[i-1].health;
// document.querySelector(`#saxon${i} .npcStr`).innerText = saxonArmy[i-1].strength;
// }
// // console.log(vikingArmy)
// console.log(saxonArmy)
// //console.log(vikingArmy[2].name)



// // War
// class War {
//     vikingArmy = [];
//     saxonArmy = [];
//      addViking = function (addV){
//         this.vikingArmy.push(new Viking(addV.name, addV.health, addV.strength));
//      }
//     addSaxon= function (addS){
//         this.saxonArmy.push(new Saxon(addS.health, addS.strength));
//      }
//     // vikingAttack()
//     // saxonAttack()
//     // showStatus()
// }


class War {
    vikingArmy = [];
    saxonArmy = [];
    addViking(i) {
        let vHealth = Math.floor(Math.random() * 190) + 60;
        let vStrength = Math.floor(Math.random() * 145) + 5;
        let vName = vikingNames[Math.floor(Math.random() * 93)]
        this.vikingArmy.push(new Viking(vName, vHealth, vStrength));
    };
    addSaxon(i) {
        let vHealth = Math.floor(Math.random() * 80) + 80;
        let vStrength = Math.floor(Math.random() * 50) + 20;
        this.saxonArmy.push(new Saxon(`Saxon${i}`, vHealth, vStrength))
    };
    vikingAttack() {
    let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let randomSaxon = this.saxonArmy[randomSaxonIndex];
    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let randomViking = this.vikingArmy[randomVikingIndex];
    let result = randomSaxon.receiveDamage(randomViking.strength);
    if(randomSaxon.health<=0){
      this.saxonArmy.splice(randomSaxonIndex, 1);
    }
    return result;
    }
    saxonAttack() {
    let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let randomSaxon = this.saxonArmy[randomSaxonIndex];
    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let randomViking = this.vikingArmy[randomVikingIndex];
    let result = randomViking.receiveDamage(randomSaxon.strength);
    if(randomViking.health<=0){
      this.vikingArmy.splice(randomVikingIndex);
    }
    return result;
    }
    showStatus() {
        if(this.saxonArmy.length === 0){
            return `Vikings have won the war of the century!`
        } else if(this.vikingArmy.length === 0) {
            return `Saxons have fought for their lives and survived another day...`
        } else if(this.saxonArmy.length === 1 && this.vikingArmy.length === 1){
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }
}

document.getElementById("warStartb").onclick = event =>{
    let thisWar = new War;
    for (let i=1; i<=5; i++){
    /*Add 5 vikings*/
    let htmlString = `
    <image class='tImage' src="./img/viking.png"></image>
    <div id="viking${i}" class="tStatus">
        <strong>Name:</strong><span class="npcName"></span>                    
        <strong>Health:</strong><span class="npcHealth"></span>
        <strong>Strength:</strong><span class="npcStr"></span>
    </div>`
    let newRow = document.createElement("div");
    newRow.classList.add("npc");
    newRow.innerHTML = htmlString;
    document.getElementById(`vikingArmy`).appendChild(newRow);

    /*Add 5 Saxon*/
    htmlString = `
    <image class='tImage' src="./img/saxon.png"></image>
    <div id="saxon${i}" class="tStatus">
        <strong>Name:</strong><span class="npcName"></span>  
        <strong>Health:</strong><span class="npcHealth"></span>
        <strong>Strength:</strong><span class="npcStr"></span>
    </div>`
    newRow = document.createElement("div");
    newRow.classList.add("npc");
    newRow.innerHTML = htmlString;
    document.getElementById(`saxonArmy`).appendChild(newRow);


    thisWar.addViking(i);

    
        document.querySelector(`#viking${i} .npcName`).innerText = thisWar.vikingArmy[i-1].name;
        document.querySelector(`#viking${i} .npcHealth`).innerText = thisWar.vikingArmy[i-1].health;
        document.querySelector(`#viking${i} .npcStr`).innerText = thisWar.vikingArmy[i-1].strength;
    thisWar.addSaxon(i);
        document.querySelector(`#saxon${i} .npcHealth`).innerText = thisWar.saxonArmy[i-1].health;
        document.querySelector(`#saxon${i} .npcStr`).innerText = thisWar.saxonArmy[i-1].strength

    console.log(thisWar.vikingArmy)

    }
}


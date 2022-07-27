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
        constructor(health, strength) {
        super(health, strength);
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
    addViking(viking) {
        this.vikingArmy.push(viking);
    };
    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
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




//factory of enemy on some game
// I tried to write it, but made some mistakes.
// It is incorrect to set up values at the creation stage.
// You must define all parameter values when writing the Factory class.
class Enemy {
    constructor(name, helth, dmg){
        this.name = name;
        this.helth = helth;
        this.dmg = dmg;
    }

    myNameIs(){
        return this.name;
    }
    attack(){
        return this.dmg;
    }

    takeDmg(dmg){
        this.helth -= dmg;
        console.log(this.name, " take " , dmg, " dmg");
    }

    isAlive(){
        return this.helth > 0;
    }

}

class EnemyFactory{
    create(name, helth, dmg){
        return new Enemy(name, helth, dmg)
    }
}

const enemyFactory = new EnemyFactory();

const ghost = enemyFactory.create('ghost', 100, 10);

console.log(ghost.myNameIs());
ghost.takeDmg(110)
console.log('alive ',ghost.isAlive())


const zombie = enemyFactory.create('zombie', 140, 15);

console.log(zombie.myNameIs());
zombie.takeDmg(110)
console.log('alive ',zombie.isAlive())

//correct implementation

class Zombie extends Enemy{
    constructor(){
        super('zombie', 140, 15);
    }

    eatBrain(){
        console.log('eat brain');
    }
}

class Ghost extends Enemy{
    constructor(){
        super('ghost', 100, 15);
    }

    goThroughWalls(){
        console.log('go through walls');
    }
}

class CorrectEnemyFactory{
    create(mob){
        switch (mob) {
            case 'zombie':
                return new Zombie();
            case 'ghost':
                return new Ghost();
            default:
                throw new Error('Unknown mob');
        }
    }
}

const correctEnemyFactory = new CorrectEnemyFactory();

const correctZombie = correctEnemyFactory.create('zombie');

console.log(correctZombie.myNameIs());
correctZombie.takeDmg(110)
console.log('alive ',correctZombie.isAlive())
correctZombie.eatBrain();

const correctGhost = correctEnemyFactory.create('ghost');

console.log(correctGhost.myNameIs());
correctGhost.takeDmg(110)
console.log('alive ',correctGhost.isAlive())
correctGhost.goThroughWalls();

const correctDefault = correctEnemyFactory.create();

console.log(correctDefault.myNameIs());
correctDefault.takeDmg(110)
console.log('alive ',correctDefault.isAlive())
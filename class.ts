//private nao pode pode ser chamado fora da class
//read only pode ser lido mas nao alterado
//public pode ser chamado e alterado
//pode ser chamado na classe extendida mas nao fora
abstract class UserAcount {
    public name: string;
    protected age: number;

    constructor(name: string, age:number){
        this.name = name;
        this.age = age
    }

    logDetails(): void{
        console.log(`The player ${this.name} is ${this.age} year old`);
        
    }
}

class CharAccount extends UserAcount{
    private nickname: string;
    level: number;
    
    constructor(name: string, age:number, nickname: string, level: number){
        super(name, age)

        this.nickname = nickname;
        this.level = level;
    }

    get getLevel() {
        console.log("-----GET-----");
        
        return this.level
    }

    set setLevel(level: number){
        this.level = level
    }

    logCharDetail(): void{
        console.log(`The player ${this.name} is ${this.age} year old and has the char ${this.nickname} at level ${this.level}`);
        
    }
}

//Nao posso criar objeto de uma classe abstract
/* const pedro = new UserAcount("pedro", 18);
console.log(pedro);
pedro.logDetails() */

const caio = new CharAccount('Caio', 18, 'deathstroke710', 300)
console.log(caio);
caio.logDetails();
caio.logCharDetail() 
caio.setLevel = 301
console.log(caio.getLevel)




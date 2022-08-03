export
class Animal1
{
    animalName: string;
    constructor(newAnimal: string){
        this.animalName = newAnimal;
    }
    move(distance: number ){
        console.log(`${this.animalName} moved ${distance} meters`);
    }
}
class Dog1 extends Animal1{
    name: string;
    constructor(newAnimalname: string){
        super(newAnimalname);
        this.name = newAnimalname;
    }
    bark(){
        console.log(`${this.name} is barking`);
    }
    move(distance: number){
        console.log(`inside dog's move()`);
        super.move(distance);
    }
}
class Cat1 extends Animal1{
    name: string;
    constructor(newAnimalname: string){
        super(newAnimalname);
        this.name = newAnimalname;
    }
    meows(){
        console.log(`${this.name} is meows`);
    }
    move(distance: number ){
        console.log(`inside cat's move()`);
        super.move(distance);
    }
}

//creating objects
let dog = new Dog1('dog');
let cat = new Cat1('cat');

dog.move(50);
dog.bark();
cat.move(10);
cat.meows();

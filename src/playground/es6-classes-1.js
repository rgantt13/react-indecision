class Person{

    constructor(name = 'John Doe', age = 0){
    this.name = name;
    this.age = age;
    }
    getGreeting(){
        return `Hi. I am ${this.name}!`;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person{
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor){
            description  += ` They are a college student with a ${this.major} major!`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }

        hasLocation(){
            return !!this.homeLocation;
        }

        getGreeting(){
            let greeting = super.getGreeting();
            if(this.hasLocation()){
                greeting += ` I am visiting from ${this.homeLocation}.`;
            }
            return greeting;
        }
}

const me = new Student('Richard', 24, 'Computer Science');
const other = new Traveler('Pooboy III', 10, 'Brookline');
const other2 = new Traveler('Pooboy II', 10);

console.log(me);
console.log(other);
console.log(me.getGreeting());
console.log(me.getDescription());
console.log(other.getGreeting());
console.log(other2.getGreeting());
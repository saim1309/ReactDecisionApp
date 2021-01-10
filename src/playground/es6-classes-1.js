console.log("es6-classes-part1")

class Person {
    constructor(name = "Ananymous", age="0"){
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        //return "Hi. My name is "+this.name;
        return `Hi. My name is ${this.name}!`
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name,age,major){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major; //(!''-->true, !!""-->flase, !!"Sam"-->true, !!undefined-->false)
    }
    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor()){
            description +=  ` His major is ${this.major}.`
        }
        return description;
    }
} 

class Traveller extends Person {
    constructor(name,age,homeLocation){
        super(name,age);
        this.homeLocation = homeLocation;
    }
    getGreeting(){
        let greeting = super.getGreeting();
        if(this.homeLocation){
            greeting += ` I am visiting from ${this.homeLocation}. `
        }
        return greeting;
    }
}

const me = new Traveller("Saim Ahmad",27, "India");
console.log(me.getGreeting());


const others = new Traveller();
console.log(others.getGreeting());
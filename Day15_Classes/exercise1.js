class Animal {
    constructor(name, age, color, legs) {
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }
    getAnimalInfo() {
        return `Name: ${this.name}, Age: ${this.age}, Color: ${this.color}, Legs: ${this.legs}`
    }
    Talk() {
        return 'I am an animal'
    }
}


class Dog extends Animal {

    constructor(name, age, color, legs, breed) {
        super(name, age, color, legs)
        this.breed = breed
    }
    getDogInfo() {
        return `Name: ${this.name}, Age: ${this.age}, Color: ${this.color}, Legs: ${this.legs}, Breed: ${this.breed}`
    }
    Talk() {
        return 'I am a dog'
    }
}

class Cat extends Animal {
    constructor(name, age, color, legs, breed) {
        super(name, age, color, legs)
        this.breed = breed
    }
    getCatInfo() {
        return `Name: ${this.name}, Age: ${this.age}, Color: ${this.color}, Legs: ${this.legs}, Breed: ${this.breed}`
    }
    Talk() {
        return 'I am a cat'
    }
}


const dog = new Dog('Bull', 5, 'Brown', 4, 'Bull Dog')
console.log(dog.getDogInfo())
console.log(dog.Talk())

const cat = new Cat('Tom', 3, 'White', 4, 'Persian')
console.log(cat.getCatInfo())
console.log(cat.Talk())
// Output
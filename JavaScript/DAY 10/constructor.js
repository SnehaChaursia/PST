let obj = {
    fullName:"Sneha",
    secondName:"chaurasia",
    fullname(){
console.log(this.fullName+" "+this.secondName)
    }
}
obj.fullname();

let object = {
    firstName: "muumy",
    secondName: "yy",
    fullName: function() {
        console.log(this.firstName + this.secondName);
    }
};

object.fullName(); // Outputs: Rajxyz
console.log(object.fullName); // Outputs the function definition


function createCircle(r){
    return{
        radius:r,
        draw: function(){
            console.log('draw');
        }
    }
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);


/*
factory function and constructor functions:
-factory function are the function which return objects. They're called like regular functions and don't use the new keyword
-they provide a simple way to create objects
-factory function are the function like normal one only, just returns object
*//*
constructor function:
-constructor functions are used to create & initialize objects.
-they use the 'new' keyword to create objects.
-they use the 'this' keyword to refer to the newly created object.
-constructor functions have a name which starts with a capital letter.
*/

function person(name, age){
    this.name= name;
    this.age= age;

    this.greet = function greet(){
        console.log('Hello, ' + this.name);
    }
}

const person1 = new person("sneha", 17.5);
console.log(person1.name);
person1.greet();

const person2 = new person("riya", 17);
console.log(person2.name);
person2.greet();



function Car(make, model, year) {
    this.make = make;
    this.model=model;
    this.year=year;
    this.drive = function() {
        console.log(`${this.make} ${this.model} is driving!`);
    };
}

let car1=new Car("Toyota", "Corolla", 2020, "Red");
car1.drive();
console.log(car1);


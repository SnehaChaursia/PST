// factory function : it return new object
function createobj (name,age,rollno){
return {
    name:name,
    age:age,
    rollno:rollno,
    Intro(){

    console.log(`name is ${name} age is ${age} rollno is ${rollno}`)
    }
}
}
let student1=createobj("yug",17,1)
student1.Intro()
let student2=createobj("om",17,2)
student2.Intro()
console.log(student1)

//constructor function
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.drive = function() {
        console.log(`${this.make} ${this.model} is driving!`);
    };
}

const car1 = new Car("Toyota", "Corolla", 2020);
car1.drive(); // Outputs: Toyota Corolla is driving!

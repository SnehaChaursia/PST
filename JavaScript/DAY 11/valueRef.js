// Value Types
// Value types (or primitive types) are data types that hold their values directly
let x = 5; // value type
let y = x; // y is a copy of x
x = 10; // changing x does not affect y
console.log(y); // Output: 5
console.log(x); // Output: 10

// Reference types are data types that hold a reference (or pointer) to the actual data
let obj1 = { name: 'Alice' }; // reference type
let obj2 = obj1; // obj2 references the same object as obj1
obj1.name = 'Bob'; // changing obj1 affects obj2
console.log(obj2.name); // Output: Bob


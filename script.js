// Person Class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // greet method for Person class
  greet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
  }
}

// Employee Class inheriting from Person
class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age); // Call the parent constructor (Person) to initialize name and age
    this.jobTitle = jobTitle;
  }

  // jobGreet method for Employee class
  jobGreet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
  }
}

// Example usage:
// Creating an instance of the Person class
const person = new Person("Alice", 25);
person.greet(); // Output: Hello, my name is Alice, I am 25 years old.

// Creating an instance of the Employee class
const employee = new Employee("Bob", 30, "Manager");
employee.jobGreet(); // Output: Hello, my name is Bob, I am 30 years old, and my job title is Manager.
employee.greet(); // Output: Hello, my name is Bob, I am 30 years old. (Inherited from Person)

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

  // Fetch person data from an API
  static async fetchPersonData(apiUrl) {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json(); // Assume the API returns JSON data
      const person = new Person(data.name, data.age);
      person.greet();
    } catch (error) {
      console.error("Error fetching person data:", error);
    }
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

  // Send employee data to an API
  static async sendEmployeeData(apiUrl, employeeData) {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(employeeData), // Send employee data as a JSON string
      });

      const data = await response.json();
      console.log("Employee data sent successfully:", data);
    } catch (error) {
      console.error("Error sending employee data:", error);
    }
  }
}

// Example usage:

// Fetching person data from a mock API
const personApiUrl = "https://api.example.com/person"; // Replace with actual API endpoint
Person.fetchPersonData(personApiUrl);

// Sending employee data to a mock API
const employeeApiUrl = "https://api.example.com/employee"; // Replace with actual API endpoint
const employeeData = {
  name: "Bob",
  age: 30,
  jobTitle: "Manager",
};
Employee.sendEmployeeData(employeeApiUrl, employeeData);

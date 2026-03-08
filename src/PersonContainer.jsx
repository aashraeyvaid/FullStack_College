import React from 'react';
import PersonCard from './PersonCard';

// Base Class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.role = "Person";
  }
  getInfo() { return `${this.name} is ${this.age} years old.`; }
}

// Subclasses
class Student extends Person {
  constructor(name, age, studentId, course) {
    super(name, age);
    this.studentId = studentId;
    this.course = course;
    this.role = "Student";
  }
  getInfo() { return `${this.name} is studying ${this.course}.`; }
}

class Teacher extends Person {
  constructor(name, age, employeeId, subject) {
    super(name, age);
    this.employeeId = employeeId;
    this.subject = subject;
    this.role = "Teacher";
  }
  getInfo() { return `Professor ${this.name} teaches ${this.subject}.`; }
}

function PersonContainer() {
  const members = [
    new Student("Srinivaasa", 19, "CU-2024", "AIML"),
    new Teacher("Dr. Khanna", 42, "T-901", "Full Stack"),
    new Student("Rohan", 21, "CU-2022", "Cloud Computing")
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-10">
      <h1 className="text-3xl font-black text-slate-900 mb-10">University Hierarchy</h1>
      <div className="flex flex-wrap gap-8 justify-center">
        {members.map((member, index) => (
          <PersonCard key={index} person={member} />
        ))}
      </div>
    </div>
  );
}

export default PersonContainer;
class Student { name: string; age: number; address?: String; constructor(name: string, age: number, address?: String) {this.name = name; this.age = age; this.address = address} }

const nameStudent: Student = new Student("Ivan", 25, "Khabarovsk");
console.log(`Студен - ${nameStudent.name}, ${nameStudent.age} лет, адрес - ${nameStudent.address}`);
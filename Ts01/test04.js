
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  } 
  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }

  seyAge(num) {
    return this.age + num;
  }

  seyName(flag) {
    if (flag) {
      return this.name
    } else {
      return undefined;
    }
  }

}

let person1 = new Person("John", 25);

person1.seyAge(10);
person1.seyName(true);
person1.seyName(false);


// 场景一
let a = {
  name: ['even', 123, true],
  age: {
    year: 2021,
    month: 10,
    day: 15
  }
}

function changeA1() {
  a.name[0] = 'EVEN';
  a.name[1] = 456;
  a.name[2] = false;
  return a.name;
}

function changeA2() {
  let obj = {};
  a.age.old = 100;
  obj = a.age;
  return obj;
}


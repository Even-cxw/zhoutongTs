
// 场景一

let obj = {
    name: "John",
    age: 30,
}

function changeObj(obj) {
    obj.city = "New York";
}

function changeObj2(obj) {
    obj.age = 35;
    return obj;
}


// 场景二

let arr = [1, 2, 3];

function changeArr(arr) { 
    arr.push(4);
    return arr;
}

function changeArr2(arr) {
    arr[0] = 5;
}

// 场景三

let f = [
  {
    name: "John",
    age: 30,
  },
  {
    name: "Mary",
    age: 25,
  }
]

function changeF(f) {
  f.forEach(element => {
    element.phone = 123456;
  });
}


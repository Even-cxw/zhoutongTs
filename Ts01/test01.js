
// 代码一

let a = 10;
let b = 20;

function add(a, b) {
  return a + b;
}

// 代码二

let c = 30;
let d = undefined;

function sub(c, d) {
  if (d === undefined) {
    return c;
  } else {
    return c - d;
  }
}

// 代码三

let e = 40;
let f = null;
f = a;
function mul(e, f) {
  if (f === null) {
    return e;
  } else {
    return e * f;
  }
}





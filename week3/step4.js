// EX 1

let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);
myString = myString.replace(/,/g, " ");
console.log(myString);

// EX 2

let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push("turtle")
console.log(favoriteAnimals);
favoriteAnimals.splice(1, 0, "meerkat");
console.log("'meerkat' will be after 'blowfish' and before 'capricorn'");
console.log(favoriteAnimals);
console.log("'The array has a length of: '" + favoriteAnimals.length);

for (let i = 0; i <= favoriteAnimals.length; i++) {
  if (favoriteAnimals[i] === 'giraffe') {
    favoriteAnimals.splice(i, 1);
  }
}
console.log(favoriteAnimals)

for (let i = 0; i <= favoriteAnimals.length; i++) {
  if (favoriteAnimals[i] === 'meerkat') {
/* 2.9  */     favoriteAnimals.splice(i, 1);
/* 2.10 */    console.log("The item you are looking for is at index: " + i)
  }
}
console.log(favoriteAnimals)


// More JavaScript 

// 1 
function sumVar(var1, var2, var3) {
  let sum = var1 + var2 + var3;
  return sum;
}
console.log(sumVar(2, 3, 1));

// 2 
function colorCar(col) {
  let car = "a " + col + " car"
  return car;
}
console.log(colorCar("red"));

// 3 
const myCar = {
  color: "black",
  brand: "BMW",
  model: "2018"
};

console.log(typeof myCar)

function printObj(obj) {
  if (typeof obj === 'object') {
    let prop;
    for (prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        console.log(prop + ": " + obj[prop])
      }
    }
  }
}
printObj(myCar);

// 4

function vehicleType(colour, code) {
  if (code === 1) {
    return ("a " + colour + " car")
  } else if (code === 2) {
    return ("a " + colour + " motorbike")
  } else {
    return ("please enter a correct code 1 or 2 ")
  }
}
console.log(vehicleType("blue", 2));


// 5 

let lchk = (3 === 3) ? "yes" : "no";
console.log(lchk);

// 6     ---- changed as  (// 9)
/*
function vehicle(colour, code, age) {
  if (code === 1 && age < 2) {
    return ("a " + colour + " new car")
  } else if (code === 1 && age >= 2) {
    return ("a " + colour + " used car")
  } else if (code === 2 && age < 2) {
    return ("a " + colour + " new motorbike")
  } else if (code === 2 && age >= 2) {
    return ("a " + colour + " used motorbike")
  } else {
    return ("please enter a correct code 1 or 2 and ")
  }
}

console.log(vehicle("blue", 1, 5));
*/
// 7 

let list = ["car", "motorbike", "caravan", "bike"]
console.log(list)
// 8

console.log(list[2]);

// 9 

function vehicle(colour, code, age) {
  if (list[code - 1] !== undefined && age < 2) {
    return ("a " + colour + " new " + list[code - 1])
  } else if (list[code - 1] !== undefined && age >= 2) {
    return ("a " + colour + " used " + list[code - 1])
  } else {
    return ("please enter a correct code between 1 and " + list.length)
  }
}

console.log(vehicle("green", 3, 1));

// 11

list.push("scooter");
console.log(list)

// 10

let txt = "Amazing Joe's Garage, we service "
for (let i = 0; i < list.length - 2; i++) {
  txt = txt + list[i] + " , "
}

console.log(txt + list[list.length - 2] + " and " + list[list.length - 1] + ".")

/*  ----  with out loop [ done by slice and join]

let list1 = list.slice(0, list.length - 1)
let last = list[list.length - 1]
console.log(list1.join(","))
console.log(last)
console.log("Amazing Joe's Garage, we service " + list1 + " and " + last + ".")
*/

// 12 

let emptyObj = {};

// 13

let teacherObj = {
  HTMLCSS: ["Ivana", "Hassan"],
  CLI: "Unmish"
}
for (prop in teacherObj) {
  if (teacherObj.hasOwnProperty(prop)) {
    console.log(prop + " : " + teacherObj[prop]);
  }
}

// 14 

teacherObj.langs = ["HTML", "CSS", "JavaScript"];
for (prop in teacherObj) {
  if (teacherObj.hasOwnProperty(prop)) {
    console.log(prop + " : " + teacherObj[prop]);
  }
}

// 15 

let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

console.log(x == y);

console.log(x === y);

console.log(z === y);

console.log(z == x);

function same(a, b) {
  var same = a.length === b.length,
    result,
    len;
  if (!same) { result = false }
  else {
    // so far, they're the same
    result = true;
    len = a.length;
    for (var i = 0; result !== false && i < len; i++) {
      if (a[i] !== b[i]) {
        result = false;
      }
    }
  }

  return result;
}

console.log(same(x, y));

/*
let ch = function (value, index) {
  return value === y.sort()[index]
}
console.log(x.length === y.length && x.sort().every(ch))
*/

/* ---- my way  "there is a mistake"

function check(v1, v2) {
  if (v1.length === v2.length) {
    for (let i = 0; i < v1.length; i++) {
      if (v1[i] === v2[i]) {
        return true
      } else {
        return false
      }
    }
  } else {
    return false
  }
}
console.log(check(x, y))
*/

// 16

let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;

o1.fav = "apple";       // changing o1 not effect o3
o2.animals = "cat";     // changing o2 effect o3

console.log(o1)
console.log(o2)
console.log(o3)

console.log(JSON.stringify(o2) === JSON.stringify(o3))
console.log(JSON.stringify(o3) === JSON.stringify(o2))

// 17 

let bar = 42;
console.log(typeof typeof bar);  // checking the type of the type value "Number" is string
console.log(typeof bar);         // checking the type of the value 
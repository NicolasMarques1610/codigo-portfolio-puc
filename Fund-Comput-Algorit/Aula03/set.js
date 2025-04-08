// Video 2 - 27:30
var mySet = new Set()

// mySet.add(0)
// console.log(mySet)
// console.log("-=-=-==-=")

// mySet.add(1)
// console.log(mySet)
// console.log("-=-=-==-=")

// mySet.add(1)
// console.log(mySet)
// console.log("-=-=-==-=")

// mySet.add(2)
// console.log(mySet)
// console.log("-=-=-==-=")

// mySet.add(3)
// console.log(mySet)
// console.log("-=-=-==-=")

// mySet.add(2)
// console.log(mySet)
// console.log("-=-=-==-=")

mySet.add(1);
mySet.add(5);
mySet.add(5);
mySet.add("texto");
var o = { a: 1, b: 2 };
mySet.add(o);

for(let item of mySet) console.log(item);

const numeros = [1, 1, 2, 2, 3, 3, 3, 3, 4, 5, 5, 6, 7, 7, 8, 9, 9, 10];

console.log([...new Set(numeros)]);

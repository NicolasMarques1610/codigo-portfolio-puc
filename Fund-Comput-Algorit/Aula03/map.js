// Map é uma coleção de pares chave-valor, onde as chaves podem ser de qualquer tipo e não podem ser duplicadas.
const contacts = new Map();
contacts.set("Peralta", { phone: "123-555-5555", address: "123 Main St" });
contacts.has("Peralta"); // true
contacts.get("Emy"); // undefined
contacts.set("Raymond Holt", { phone: "123-555-2341", address: "555 Main St" });
contacts.get("Peralta"); // { phone: "123-555-5555", address: "123 Main St" }
contacts.delete("Sargent"); // false
contacts.delete("Peralta"); // true
console.log(contacts.size); // 1

const myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");

for(const [key, value] of myMap) {
  console.log(key + " - " + value);
}

console.log("-=-=-==-=");

for(const key of myMap.keys()) {
  console.log(key);
}

console.log("-=-=-==-=");

for(const value of myMap.values()) {
  console.log(value);
}

console.log("-=-=-==-=");

for(const [key, value] of myMap.entries()) {
  console.log(key + " - " + value);
}

console.log("-=-=-==-=");

myMap.forEach((value, key) => {
  console.log(key + " - " + value);
})
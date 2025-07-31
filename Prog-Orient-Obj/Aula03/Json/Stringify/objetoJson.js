let student = {
    name: "John Doe",
    age: 30,
    isAdmin: false,
    courses: ["html", "css", "js"],
    wife: null,
};

let json = JSON.stringify(student); // Converte o objeto em uma string JSON
console.log(json);
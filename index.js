// Question 43
let magicians3 = ["Maham", "Sabar", "Mahnoor", "Menahil", "Areeb"];
function show_magicians(names) {
    for (let name of names) {
        console.log(name);
    }
}
function make_greet(magicians) {
    const greet = [];
    for (let i = 0; i < magicians.length; i++) {
        greet[i] = magicians[i] + " is the best.";
        // greet[i] = magicians[i];
    }
    return greet;
}
let greet = make_greet(magicians3);
show_magicians(greet);
show_magicians(magicians3);
// Question 44
function sandwich(items) {
    console.log("Sandwich order ");
    for (let i = 0; i < items.length; i++) {
        console.log(` - ${items[i]}`);
    }
}
console.log("I want these type of order ");
sandwich(["Tomate", "Potato", "Chiken", "Chilli"]);
sandwich(["Potato", "Chiken", "Chilli"]);
sandwich(["Potato", "Chiken"]);
function createcar(manufacturer, model, optional) {
    return {
        manufacturer,
        model,
        ...optional
    };
}
let mycar = createcar("Honda", "Diecast", { year: 2023, material: "plastic" });
console.log(mycar);
export {};

// Question 43
let magicians3:string[] = ["Maham","Sabar","Mahnoor","Menahil","Areeb"];
function show_magicians(names:string[]) {
    for(let name of names){
        console.log(name);
    }
}
function make_greet(magicians:string[]):string[] {
    const greet:string[] = [];
    for(let i =0;i<magicians.length;i++){
        greet[i]=magicians[i] + " is the best.";
        // greet[i] = magicians[i];
    }
    return greet;
}
let greet:string[]= make_greet(magicians3);
show_magicians(greet);
show_magicians(magicians3);

// Question 44

function sandwich(items:string[]) {
    console.log("Sandwich order ");
    for(let i=0;i<items.length;i++){
        console.log(` - ${items[i]}`)
    }
}
console.log("I want these type of order ");
sandwich(["Tomate","Potato","Chiken","Chilli"]);
sandwich(["Potato","Chiken","Chilli"]);
sandwich(["Potato","Chiken"]);

// Question 45

type car = {
    manufacturer : string,
    model : string,
    [key:string] : any
}

function createcar(manufacturer:string,model:string,optional:Record<string,any>):car {
    return {
        manufacturer,
        model,
        ...optional
    }
}

let mycar:car = createcar("Honda","Diecast",{year:2023,material:"plastic"});
console.log(mycar);

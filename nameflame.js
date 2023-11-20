const prompt=require("prompt-sync")({sigint:true}); 
console.log("Welcome to this awesome software that can tell you your own name!");
let name = prompt("What is your name?");
if (name === "m") {
    console.log(`Your name is ${name}, see how cool!`);
}
else{
    console.log(`invalid name`);
}

// use alrt when using in web browser//

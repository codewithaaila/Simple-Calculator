#! /usr/bin/env node

import inquirer from "inquirer";

// Printing a Wellconme Message
console.log("\n\tWellcome To \'CodeWithAaila\' - CLI Simple Calculator\n");

// asking questions from users through inquirer

let answers = await inquirer.prompt([
    {message: "Enter First Number" , type: "number", name: "FirstNumber"},
    {message: "Enter Second Number", type: "number", name: "SecondNumber"},
    {
        message: "Select one Operator to perofrm Operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtractions", "Multiplication", "Division"],
    },
]);


// conditional statements if-else

if(answers.operator === "Addition"){
    console.log(answers.FirstNumber + answers.SecondNumber)
}
else if(answers.operator === "Subtractions"){
    console.log(answers.FirstNumber - answers.SecondNumber)
}
else if(answers.operator === "Multiplication"){
    console.log(answers.FirstNumber * answers.SecondNumber)
}
else if(answers.operator === "Division"){
    console.log(answers.FirstNumber / answers.SecondNumber)
}
else{
    console.log("invalid input")
}

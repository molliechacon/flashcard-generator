// require node module constructor files
var basicCard = require("./basiccard.js");
var clozeCard = require("./clozecard.js");
// require node module packages
var inquirer = require("inquirer");

// initial prompt - basic or cloze card?
inquirer.prompt([
    {
        type: "list",
        name: "command",
        message: "Would you like to: ",
        choices: [
            "Add a basic flashcard?",
            "Add a cloze-deleted flashcard?"
        ]
    }
]).then(function(answer) {

    if (answer.command === "Add a basic flashcard?") {     
        addBasic();
        
    } else if (answer.command === "Add a cloze-deleted flashcard?") {
        addCloze();
    }
});



// would love to list the functions below as prototypes of the constructors 
// contained within basiccard.js and clozecard.js but can't get the 
// promises/asynchronous problem fixed... At least they kind of work when placed here...

function addBasic() {
    inquirer.prompt([
        {
            type: "input",
            name: "front",
            message: "Please list your question for the front of the card:",
            validate: function(input) {
                if (input === "") {
                    console.log("Please provide a question.");
                    return false;
                } else {
                    return true;
                }
            }
        }, {
            type: "input",
            name: "back",
            message: "Please provide the answer.",
            validate: function(input) {
                if (input === "") {
                    console.log("Please list your answer.");
                    return false;
                } else {
                    return true;
                }
            }
        }
    ]).then(function(answers) {

        // THIS CONSOLE.LOG WORKS!
        console.log(answers);

        // BUT BASICCARD IS NOT DEFINED BELOW!!!!!! WHY???????? BASICCARD.JS 
        // IS REQUIRED ABOVE!!!!!!!!! THE CONSOLE.LOG W/IN THE BASICCARD.JS FILE 
        // EXECUTES SO I BELIEVE IT IS REQUIRED PROPERLY??
        
        // PROMISES?!?! WTF? HELP.

        // here is the error message from the CL: (node:11788) 
        // UnhandledPromiseRejectionWarning: Unhandled promise rejection 
        // (rejection id: 1): ReferenceError: BasicCard is not defined
        var newBasic = new BasicCard(answers.front, answers.back);

        console.log(newBasic.front);
        logBasic();
    });     
};


function logBasic() {
    var basicData = "/nType: Basic Card" + "/nQuestion: " + newBasic.front + "/nAnswer: " + newBasic.back;
    
    fs.appendFile("log.txt", basicData, function(err) {
        if (err) {
            console.log(err);
        }
        console.log("Your flashcard has been added.");
    });
};


function addCloze() {
    inquirer.prompt([
        {
            type: "input",
             name: "text",
            message: "Please list the full text for the front of the card:",
            validate: function(input) {
                if (input === "") {
                    console.log("Please provide your full text statement.");
                    return false;
                } else {
                    return true;
                }
            }
        }, {
            type: "input",
            name: "cloze",
            message: "Please retype the cloze-deletion portion of your statement for the back of the card.",
            validate: function(input) {
                if (input === "") {
                    console.log("Please provide the cloze-deletion.");
                    return false;
                } else {
                    return true;
                }
            }
        }
    ]).then(function(answers) {
        // how to throw an error if the cloze is not contained within the text?


        // this console.log works
        console.log(answers);


        // same issue here as above. ClozeCard is not defined... Why?
        var newCloze = new ClozeCard(answers.text, answers.cloze)
        logCloze();
    }); 
};


function logCloze() {
    var clozeData = "/nType: Cloze-Deleted Card" + "/nFront(partial text): " + newCloze.partial + "/nCloze(back): " + newCloze.back;
    
    fs.appendFile("log.txt", clozeData, function(err) {
        if (err) {
            console.log(err)
        }
        console.log("Your flashcard has been added.");
    });
        
     console.log(clozeData);
};


// consider adding a prompt for viewing flashcards that have been created. 



    
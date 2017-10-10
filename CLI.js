// require node module constructor files
var basicCard = require("./basiccard.js");
var clozeCard = require("./clozecard.js");
// require node module packages
var inquirer = require("inquirer");

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
    var myNewBasic = new BasicCard();
    var myNewCloze = new ClozeCard()
    if (answer.command === "Add a basic flashcard?") {
        myNewBasic.addBasic();
    } else if (answer.command === "Add a cloze-deleted flashcard?") {
        myNewCloze.addCloze();
    }
});





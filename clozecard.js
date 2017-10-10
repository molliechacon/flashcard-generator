// require fs for appending new cards to log.txt
var fs = require("fs");

// constructor function for cloze card
function ClozeCard(text, cloze) {
    this.text = text;
    this.cloze = cloze;

    var clozeDelete = this.cloze;
    var clozeText = this.text;
    this.partial = clozeText.replace(clozeDelete, "...");
    this.fullText = this.text;
};

// prototype for adding a new cloze-deleted card
ClozeCard.prototype.addCloze = function() {
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
        var newCloze = new ClozeCard(answers.text, answers.cloze)
        logCloze();
    }) 
};

// prototype for adding new cloze card to log.txt
ClozeCard.prototype.logCloze = function() {
    var clozeData = "/nType: Cloze-Deleted Card" + "/nFront(partial text): " + newCloze.partial + "/nCloze(back): " + newCloze.back;

    fs.appendFile("log.txt", clozeData);
    
    console.log(clozeData);
};


var test = new ClozeCard("I am Mollie", "Mollie");

module.exports = ClozeCard;
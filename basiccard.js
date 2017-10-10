// require fs for appending new cards to log.txt
var fs = require("fs");

// constructor function for basic card
function BasicCard(front, back) {
    this.front = front;
    this.back = back;

    function addBasic() {
        input.prompt([
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
            var newBasic = new BasicCard(answers.front, answers.back)
            logBasic();
            
        }) 
    };
};

// prototype for adding a new basic card
// BasicCard.prototype.addBasic = function() {
//     input.prompt([
//         {
//             type: "input",
//             name: "front",
//             message: "Please list your question for the front of the card:",
//             validate: function(input) {
//                 if (input === "") {
//                     console.log("Please provide a question.");
//                     return false;
//                 } else {
//                     return true;
//                 }
//             }
//         }, {
//             type: "input",
//             name: "back",
//             message: "Please provide the answer.",
//             validate: function(input) {
//                 if (input === "") {
//                     console.log("Please list your answer.");
//                     return false;
//                 } else {
//                     return true;
//                 }
//             }
//         }
//     ]).then(function(answers) {
//         var newBasic = new BasicCard(answers.front, answers.back)
//         logBasic();
        
//     }) 
// };

// prototype for adding new basic card info to log.txt
BasicCard.prototype.logBasic = function() {
    var basicData = "/nType: Basic Card" + "/nQuestion: " + newBasic.front + "/nAnswer: " + newBasic.back;

    fs.appendFile("log.txt", basicData);
};

module.exports = BasicCard;
// constructor function for cloze card
function ClozeCard(text, cloze) {
    this.text = text;
    this.cloze = cloze;
    this.partial = this.text.replace(this.cloze, "...");
    this.fullText = this.text;
};

console.log("This is clozecard.js");

module.exports = ClozeCard;
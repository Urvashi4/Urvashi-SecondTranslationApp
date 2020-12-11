var userText = document.querySelector("#userInput");
var translateBtn = document.querySelector("#btn-translator");
var sampleBtn = document.querySelector("#btn-sample");
var refreshBtn = document.querySelector("#btn-refresh");
var emoticonOp = document.querySelector("#emojiOutput");

var serverURL = "https://api.funtranslations.com/translate/pirate.json";

function constructURL(text){
    var finalURL = serverURL+"?"+"text="+text;
    return finalURL;
}

function errorHandler(error) {
    console.log("Error Occured: "+error);
    alert("Maximun count is excedeed. Please try after an hour.");
}

function clickHandler() {
    var enterdText = userText.value;
    fetch(constructURL(enterdText))
    .then(response => response.json())
    .then(json => {emoticonOp.innerText = json.contents.translated})
    .catch(errorHandler)
}

translateBtn.addEventListener("click", clickHandler);

sampleBtn.addEventListener("click", () => {
    userText.value = "You may have a jar of dirt...But i have a peg leg of rum!";
})

refreshBtn.addEventListener("click", () => {
    userText.value = "";
    emoticonOp.innerText= "";
})
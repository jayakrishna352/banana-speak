var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getURL(text) {
    return "https://api.funtranslations.com/translate/minion.json" + "?" + "text=" + text;
}

function errorHandler(error) {
    console.log("error!! occured", error);
    alert("ERROR!!! \nTry again after some time...");
}

function clickHandler() {
    fetch(getURL(txtInput.value))
        .then(response => response.json())
        .then(json => {
            txtOutput.innerText = json.contents.translated;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);
import './../scss/style.scss'

// Your code goes here

// imports
import * as SETTINGS from "./settings.js";

// values used to generate password
let symbols = [];

// apply values
function apply() {

    if(SETTINGS.options.letters) symbols.push(SETTINGS.letters);
    if(SETTINGS.options.numbers) symbols.push(SETTINGS.numbers);
    if(SETTINGS.options.specialCharacters) symbols.push(SETTINGS.characters);

    symbols = [].concat.apply([], symbols);

}

// generate password
function generate(length) {

    let password = [];

    if(symbols.length > 0) {
        for(let index = 0; index < length; index++) {
            password.push(symbols[Math.floor(Math.random() * symbols.length)]);
        }

    }

    return password;

}


// listen for changes
document.querySelector(".generate button").addEventListener("click", function() {

    apply();

    document.querySelector(".output").textContent = generate(document.querySelector(".length").value);

});

document.querySelector(".letters").addEventListener("change", function(event) {
    SETTINGS.options.letters = event.target.checked;
});

document.querySelector(".numbers").addEventListener("change", function(event) {
    SETTINGS.options.numbers = event.target.checked;
});

document.querySelector(".specialCharacters").addEventListener("change", function(event) {
    SETTINGS.options.specialCharacters = event.target.checked;
});





















// init array
function init() {
    apply();
}

init();
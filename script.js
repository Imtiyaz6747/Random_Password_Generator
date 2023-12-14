const input = document.getElementById("textrField");
const passwordLength = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const loverCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=|}[]<>?/";

const completeLength = upperCase + loverCase + numbers + symbols;

function generateRandom(){
    let genRandomNumber = "";

    genRandomNumber += upperCase[Math.floor(Math.random() * upperCase.length)]; 
    genRandomNumber += loverCase[Math.floor(Math.random() * loverCase.length)]; 
    genRandomNumber += numbers[Math.floor(Math.random() * numbers.length)]; 
    genRandomNumber += symbols[Math.floor(Math.random() * symbols.length)]; 

    while(passwordLength > genRandomNumber.length){
        genRandomNumber += completeLength[Math.floor(Math.random() * completeLength.length)]; 
    }
    input.value = genRandomNumber;
}

function copyPassword(){
    input.select();
    document.execCommand("copy");
}

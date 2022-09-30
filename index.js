let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let passwordOne = document.getElementById('passwordOne-input');
let passwordTwo = document.getElementById('passwordTwo-input');
let passwordLength = 15;
let password = '';
let password2 = '';


function generateNumber(){
    let getcharacter = characters[Math.floor(Math.random()*characters.length)];
    return getcharacter;
};



function generatePassword(){
    let numbers = '';
    let numbers2 = '';
    
    for(let i = 0; i <= passwordLength; i++){
        numbers += generateNumber();
        password = numbers
        passwordOne.value = password;
    };
    
    for(let i = 0; i <= passwordLength; i++){
        numbers2 += generateNumber();
        password2 = numbers2;
        passwordTwo.value = password2;
    };
}

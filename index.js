let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


// let passwords = [];
let passwordOne = document.getElementById('passwordOne-input');
let passwordTwo = document.getElementById('passwordTwo-input');

// let justOne = document.getElementById('just-One')
// let justTwo = document.getElementById('just-Two')

function generateNumber(){
    let getcharacter = characters[Math.floor(Math.random()*characters.length)];
    return getcharacter;
}


function generatePassword(){
    let randomCharacter1 = generateNumber();
    let randomCharacter2 = generateNumber();
    let randomCharacter3 = generateNumber();
    let randomCharacter4 = generateNumber();
    let randomCharacter5 = generateNumber();
    let randomCharacter6 = generateNumber();
    let randomCharacter7 = generateNumber();
    let randomCharacter8 = generateNumber();
    let randomCharacter9 = generateNumber();
    let randomCharacter10 = generateNumber();
    let randomCharacter11 = generateNumber();
    let randomCharacter12 = generateNumber();
    let randomCharacter13 = generateNumber();
    let randomCharacter14 = generateNumber();
    let randomCharacter15 = generateNumber();
    
    password1 = randomCharacter1 + randomCharacter2 + randomCharacter3 + randomCharacter4 + randomCharacter5 + randomCharacter6 + randomCharacter7 + randomCharacter8 + randomCharacter9 + randomCharacter10 + randomCharacter11 + randomCharacter12 + randomCharacter13 + randomCharacter14 + randomCharacter15;
    
    passwordOne.value = password1;
    
    
    let randomCharacter16 = generateNumber();
    let randomCharacter17 = generateNumber();
    let randomCharacter18 = generateNumber();
    let randomCharacter19 = generateNumber();
    let randomCharacter20 = generateNumber();
    let randomCharacter21 = generateNumber();;
    let randomCharacter22 = generateNumber();
    let randomCharacter23 = generateNumber();
    let randomCharacter24 = generateNumber();
    let randomCharacter25 = generateNumber();
    let randomCharacter26 = generateNumber();
    let randomCharacter27 = generateNumber();
    let randomCharacter28 = generateNumber();
    let randomCharacter29 = generateNumber();
    let randomCharacter30 = generateNumber();
    
    password2 = randomCharacter16 + randomCharacter17 + randomCharacter18 + randomCharacter19 + randomCharacter20 + randomCharacter21 + randomCharacter22 + randomCharacter23 + randomCharacter24 + randomCharacter25 + randomCharacter26 + randomCharacter27 + randomCharacter28 + randomCharacter29 + randomCharacter30;
    
    passwordTwo.value = password2;
}

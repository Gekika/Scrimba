const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}"
    ,"]",",","|",":",";","<",">",".","?","/"];


let passOneEl = document.getElementById("passOne")
let passTwoEl = document.getElementById("passTwo")

    
function gen(){
    let pOne = ""
    let pTwo = ""
    let passLength = 15

     if (!passOneEl || !passTwoEl) {
        console.log("Error: One or both HTML elements not found!");
        return; // Stop the function if elements are missing
    }

    // a loop to generate the 1st password
    for (let i = 0; i < passLength; i++){
        let index = Math.floor(Math.random()*characters.length)
        pOne += characters[index]
        console.log(pOne)
    }

    // a loop to generate the 2nd password
    for (let i = 0; i < passLength; i++){
        let index = Math.floor(Math.random()*characters.length)
        pTwo += characters[index]
        console.log(pTwo)
    }

    passOneEl.textContent = pOne  
    passTwoEl.textContent = pTwo

}
    

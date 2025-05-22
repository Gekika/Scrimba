


// home section
let count1= 0

let score1 = document.getElementById("home-score-screen")


function add_one(){
    count1 += 1
    score1.textContent = count1
    console.log(count1)
}
function add_two(){
    count1 += 2
    score1.textContent = count1
    console.log(count1)
}
function add_three(){
    count1 += 31
    score1.textContent = count1
    console.log(count1)
}
function minus(){
    count1 -= 1
    score1.textContent = count1
    console.log(count1)
}

// guest section
let count2= 0

let score2 = document.getElementById("guest-score-screen")


function add_one_g(){
    count2 += 1
    score2.textContent = count2
    console.log(count2)
}
function add_two_g(){
    count2 += 2
    score2.textContent = count2
    console.log(count2)
}
function add_three_g(){
    count2 += 3
    score2.textContent = count2
    console.log(count2)
}
function minus_g(){
    count2 -= 1
    score2.textContent = count2
    console.log(count2)
}





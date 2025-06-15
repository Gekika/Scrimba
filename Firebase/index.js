// we import this function to help us do thte ones and twos
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js"
import { getDatabase,
        ref,
        push,
        onValue,
        remove
 } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js"


// create a variable to help us store the configuration details 
const firebaseConfig = {
    databaseURL: 'https://scrimba-32d65-default-rtdb.asia-southeast1.firebasedatabase.app/'
}
// we will then initialize the firebase app here
const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const dbRef = ref(database, 'users')
console.log(database)

// this is will help us test 
let pushBtn = document.getElementById("p-btn")
let inputBtn = document.getElementById('input')
let deleteBtn = document.getElementById('del-btn')

pushBtn.addEventListener('click', function(){
    push(dbRef, inputBtn.value)
    inputBtn.value = ''
})

// we are now able to push data we can now fetch the data using onValue function fromFirebase

onValue( dbRef, function(snapshot){
    console.log(snapshot.val())
})

// what if we want to delete the data we use a function called remove that deletes all
deleteBtn.addEventListener('click', function(){
    remove(dbRef)
    console.log('Data removed')
})
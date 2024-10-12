console.log('hello world')

// Defines Sources for each Charcter Choice
const imageOne = "Assets/Images/Minion.png";
const imageTwo = "Assets/Images/Gru.png";
const imageThree = "Assets/Images/Dr Nefario.png";

// Defines HTML Element Constants
const  myButton = document.getElementById("my-button");
const  myParagraph = document.getElementById("my-paragraph");
const  characterImage = document.getElementById("character-img");

// Store which Character is Currently being Displayed
let characterCounter = 1;

function clickFunction(){
    console.log("===== NEW TESTING STARTED =====")


// Update Character Counter
characterCounter = characterCounter + 1;

// If Beyond 3 -> Set Character Counter to 1
if (characterCounter > 3) {
    characterCounter = 1;
}

// Update Paragraph Text with New Character
myParagraph.innerHTML = "I am on Character" + characterCounter;

// Find Image Related to Specific Character Counter
console.log("Testing if Character Counter is One")
if (characterCounter === 1){
    characterImage.src = imageOne;
    return;
}

console.log("Testing if Character Counter is One")
if (characterCounter === 2){
    characterImage.src = imageTwo;
    return;
}

console.log("Testing if Character Counter is One")
if (characterCounter === 3){
    characterImage.src = imageThree;
    return;
}

console.log("No More Testing To Do");
}

myButton.onclick = clickFunction


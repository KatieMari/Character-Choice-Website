console.log('hello world')

// Defines Sources for each Charcter Choice
const image1 = "Assets/Images/Cat 1.avif";
const image2 = "Assets/Images/Cat 2.jpg";
const image3 = "Assets/Images/Cat 3.jpg";

// Defines HTML Element Constants
const  myButton = document.getElementById("my-button");
const  myParagraph = document.getElementById("my-paragraph");
const  characterImage = document.getElementById("character-img");

const altText1 = ""
const altText2 = ""
const altText3 = ""

// Defien Text for Paragraph for each Character Choice
const characterName1 ="Charlie";
const characterName2 ="Leo";
const characterName3 ="Birdie";

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
myParagraph.innerHTML = "Charlie" + characterCounter;

// Find Image Related to Specific Character Counter
console.log("Testing if Character Counter is One")
if (characterCounter === 1){
    characterImage.src = image1;
    characterImage.alt = altText1;
    myParagraph.innerHTML = characterName1;
    return;
}

console.log("Testing if Character Counter is One")
if (characterCounter === 2){
    characterImage.src = image2;
    characterImage.alt = altText2;
    myParagraph.innerHTML = characterName2;
    return;
}

console.log("Testing if Character Counter is One")
if (characterCounter === 3){
    characterImage.src = image3;
    characterImage.alt = altText3;
    myParagraph.innerHTML = characterName3;
    return;
}

console.log("No More Testing To Do");
}

myButton.onclick = clickFunction


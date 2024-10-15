console.log('hello world')

// Defines Sources for each Charcter Choice
const imageSources = ["Assets/Images/Cat 1.avif", "Assets/Images/Cat 2.jpg", "Assets/Images/Cat 3.jpg"];

// Defines AltText for Images
const altText = ["Grey Cat", "Ginger Cat", "Black & White Cat"]

// // Define Text for Paragraph for each Character Choice
const characterNames = ["Charlie", "Leo", "Birdie"];

// Defines HTML Element Constants
const myButton = document.getElementById("my-button");
const myParagraph = document.getElementById("my-paragraph");
const characterImage = document.getElementById("character-img");

// Store which Character is Currently being Displayed
let characterCounter = 1;

function clickFunction() {
    console.log("===== NEW TESTING STARTED =====")

    // Update Character Counter
    characterCounter = characterCounter + 1;

    // If Beyond 3 -> Set Character Counter to 1
    if (characterCounter > 3) {
        characterCounter = 1;
    }

    // Update Paragraph Text with New Character
    myParagraph.innerHTML = "Charlie" + characterCounter;

    console.log('character counter', characterCounter);

    // Find Image Related to Specific Character Counter
    characterImage.src = imageSources[characterCounter - 1];
    characterImage.alt = altText[characterCounter - 1];
    myParagraph.innerHTML = characterNames[characterCounter - 1];
}

myButton.onclick = clickFunction


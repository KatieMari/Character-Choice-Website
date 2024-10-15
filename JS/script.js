console.log('hello world')

// Defines Sources for each Charcter Choice
const imageSources = ["Assets/Images/Cat 1.avif", "Assets/Images/Cat 2.png", "Assets/Images/Cat 3.jpg"];

// Defines AltText for Images
const altText = ["Grey Cat", "Ginger Cat", "Black & White Cat"]

// Defines Text for Paragraph for each Character Choice
const characterNames = ["Charlie", "Leo", "Birdie"];

// Defines HTML Element Constants - Character Selection
const characterChangeButton = document.getElementById("character-change-button");
const characterNameParagraph = document.getElementById("character-name-paragraph");
const characterImage = document.getElementById("character-img");

// Defines HTML Element Constants - Character Selection
const characterNameInput = document.getElementById("name-change-input");
const characterNameButton = document.getElementById("name-change-button");

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
    characterNameParagraph.innerHTML = "Charlie" + characterCounter;

    console.log('character counter', characterCounter);

    // Find Image Related to Specific Character Counter
    characterImage.src = imageSources[characterCounter - 1];
    characterImage.alt = altText[characterCounter - 1];
    characterNameParagraph.innerHTML = characterNames[characterCounter - 1];
}

// Update Character Name to what is Stored in the Input Field
function onSubmitButton() {
    characterNameParagraph.innerHTML = characterNameInput.value;
}

characterChangeButton.onclick = clickFunction
characterNameButton.onclick = onSubmitButton;




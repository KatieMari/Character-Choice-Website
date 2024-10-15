const complements = document.getElementsByClassName("complement");
const dropZone = document.getElementById("character-img");

function onDrop(event) {
    // Bring the Flower Headband to the Position (ClientX, ClientY)
    flowerHeadband.style.left = event.clientX - offsetX + "px";
    flowerHeadband.style.top = event.clientY - offsetY + "px";
    console.log("Element has been dropped");
}

function onDragOver(event) {
    event.preventDefault();
    console.log("Something is being dragged over me!");
}

let offsetX = 0;
let offsetY = 0;

function onDragStart(event) {

    const style = window.getComputedStyle(flowerHeadband, null);

    offsetX = event.clientX - parseInt(style.left);
    offsetY = event.clientY - parseInt(style.top);
    console.log("I'm being dragged");
}

dropZone.ondrop = onDrop;
dropZone.ondragover = onDragOver;

for(let complement of complements) [
    complement.ondragstart = onDragStart
]
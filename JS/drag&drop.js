const flowerHeadband = document.getElementById("complement-1")
const dropZone = document.getElementById("character-img")

function onDrop(event) {
    // Bring the Flower Headband to the Position (ClientX, ClientY)
    flowerHeadband.left = clientX;
    flowerHeadband.top = clientY;
    console.log("Element has been dropped");
}

function onDragOver(event) {
    console.log("Something is being dragged over me!")
}

function onDragStart(event) {
 console.log ("I'm being dragged")
}

dropZone.ondrop = onDrop;
dropZone.ondragover = onDragOver;
flowerHeadband.ondragstart = onDragStart;
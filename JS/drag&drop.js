// Stores HTML Elements and Class Complement in Complements
const complements = document.getElementsByClassName("complement");

// Drop Zone is the Area where Compliments can be dropped
const dropZone = document.getElementById("character-img");

// offsetX and offsetY Store the Initial Offset from Clicking on the Dragged Image
let offsetX = 0;
let offsetY = 0;

// draggedImage Stores the Currently Dragged Image
let draggedImage = undefined


/**
 * When Something is Dropped in the Dropzone, Update draggedImage style accordingly
 * @param {Event} event  Stores Information Related the Current Drop Event
 */
function onDrop(event) {
    // Update draggedImage Style to;
    // event.clientX (Horizontal Mouse Position) - offsetX (Calculated Initial Offet)
    // event.clientY (Verticle Mouse Position) - offsetY (Calculated Initial Offet)
    draggedImage.style.left = event.clientX - offsetX + "px";
    draggedImage.style.top = event.clientY - offsetY + "px";
}

/**
 * Prevent the Event Default to Allow Dropping to Happen
 * @param {Event} event  Stores Information Related to the Current Dragover Event
 */
function onDragOver(event) {
    event.preventDefault();
}


/**
 * Store draggedImage as the Event Target and Compute Initial offsetX and offsetY
 * @param {Event} event Stores Information Related to the Current DragOver Event
 */
function onDragStart(event) {

    // event.target Points the the HTML Element that Started the Drag Event, i.e. The Currently Dragged Image
    draggedImage = event.target;

    // windoe.getComputed Returns the Style of the Element Removing the CSS text i.e. '100px' becomes '100'
    const style = window.getComputedStyle(draggedImage, null);

    // Offset is Calculated as:
    // clientX (Horizontal Mouse Position) - style.left (Left Position of the Image)
    // clientY (Vertical Mouse Position) - style.top (Left Position of the Image)
    // parseInt is Needed to Transform the Style Strings to Numbers
    offsetX = event.clientX - parseInt(style.left);
    offsetY = event.clientY - parseInt(style.top);
}

// Link dropZone Related Events to the dropZone object
dropZone.ondrop = onDrop;
dropZone.ondragover = onDragOver;

// Loop Through HTML Elements Stored Inside the Complememts Array
for (let complement of complements) {
    // Link Complement Related Events to each Individual Complement
    complement.ondragstart = onDragStart;
    complement.ondragover = onDragOver;
    complement.ondrop = onDrop;
}
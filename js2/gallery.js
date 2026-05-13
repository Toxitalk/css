function upDate(previewPic) {
    console.log("Update event triggered by: " + previewPic.alt);
    var displayDiv = document.getElementById("image");
    displayDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    displayDiv.innerHTML = previewPic.alt;
}

function unDo() {
    console.log("Undo event triggered");
    var displayDiv = document.getElementById("image");
    displayDiv.style.backgroundImage = "url('')";
    displayDiv.innerHTML = "Hover over an image below to display here.";
}

// New function to add tabindex to all preview images
function addTabFocus() {
    console.log("Page loaded - initializing tabfocus");
    
    // Get all images with the class 'preview'
    var images = document.querySelectorAll(".preview");

    // Loop through each image and add the tabindex attribute
    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
        console.log("Tabindex added to image " + (i + 1));
    }
}
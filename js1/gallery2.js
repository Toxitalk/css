/* Name this external file gallery.js */

function upDate(previewPic) {
    // 1) Target the div with id "image" and change its background-image to the source of the hovered image
    var displayDiv = document.getElementById("image");
    displayDiv.style.backgroundImage = "url('" + previewPic.src + "')";

    // 2) Change the text of the div to the alt text of the hovered image 
    displayDiv.innerHTML = previewPic.alt;
}

function unDo() {
    // 1) Reset the background image back to nothing (or the original CSS state)
    var displayDiv = document.getElementById("image");
    displayDiv.style.backgroundImage = "url('')";

    // 2) Change the text back to the original text found in the HTML
    displayDiv.innerHTML = "Hover over an image below to display here.";
}
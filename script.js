var focusedImg = null;

function show(page) {
    // Switches to the page indicated by pressing menu button
    // Assert page should be an id here
    let allPageIds = ['about', 'art', 'animation', 'games/tools'];
    
    for (const id of allPageIds) {
        document.getElementById(id).style.display = 'none';
    }

    document.getElementById(page).style.display = 'initial';
    document.getElementById('content').scrollTop = 0;
}

// Show closeups of image
function focusThis(img) {
    focusedImg = img;
    document.getElementById('focusImg').src = img.src;
    document.getElementById('overlayImg').style.display = 'initial';
}

function hideOverlay() {
    document.getElementById('overlayImg').style.display = 'none';
}

function nextImg() {
    if (focusedImg.nextElementSibling && focusedImg.nextElementSibling.nodeName == 'IMG') {
        document.getElementById('focusImg').src = focusedImg.nextElementSibling.src;
        focusedImg = focusedImg.nextElementSibling;
    } else if (focusedImg.parentElement.id == 'col1') {
        focusedImg = document.getElementById('col2').firstElementChild;
        document.getElementById('focusImg').src = focusedImg.src;
    } else if (focusedImg.parentElement.id == 'col2') {
        focusedImg = document.getElementById('col1').firstElementChild;
        document.getElementById('focusImg').src = focusedImg.src;
    }
}

function prevImg() {
    if (focusedImg.previousElementSibling && focusedImg.previousElementSibling.nodeName == 'IMG') {
        document.getElementById('focusImg').src = focusedImg.previousElementSibling.src;
        focusedImg = focusedImg.previousElementSibling;
    } else if (focusedImg.parentElement.id == 'col1') {
        focusedImg = document.getElementById('col2').lastElementChild;
        document.getElementById('focusImg').src = focusedImg.src;
    } else if (focusedImg.parentElement.id == 'col2') {
        focusedImg = document.getElementById('col1').lastElementChild;
        document.getElementById('focusImg').src = focusedImg.src;
    }
}

// Prevent clicking under to overlay
// document.addEventListener("load", function(){
// document.getElementById('focusButton').addEventListener('click', e => {
//     console.log('afs')
//     e.stopPropagation();
// })
// });
function show(page) {
    // Switches to the page indicated by pressing menu button
    // Assert page should be an id here
    let allPageIds = ['art', 'animation', 'games/tools'];
    
    for (const id of allPageIds) {
        document.getElementById(id).style.display = 'none';
    }

    document.getElementById(page).style.display = 'initial';
    document.getElementById('content').scrollTop = 0;
}

// Show closeups of image
function focusThis(img) {
    document.getElementById('focusImg').src = img.src;
    document.getElementById('overlayImg').style.display = 'initial';
}

function hideOverlay() {
    document.getElementById('overlayImg').style.display = 'none';
}
function show(page) {
    // Assert page should be an id here
    let allPageIds = ['art', 'animation', 'games/tools'];
    
    for (const id of allPageIds) {
        document.getElementById(id).style.display = 'none';
    }

    document.getElementById(page).style.display = 'initial';
}
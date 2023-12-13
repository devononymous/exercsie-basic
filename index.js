function printPage () {
    window.print();
}

function changeBodyColor() {
    // Generate a random color
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    // Set the body background color
    document.body.style.backgroundColor = randomColor;
}
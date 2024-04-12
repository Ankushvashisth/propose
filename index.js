function moveButton() {
    var button = document.getElementById('noButton');
    var container = document.querySelector('.container');

    var containerWidth = container.clientWidth;
    var containerHeight = container.clientHeight;

    // Generate random position within the container
    var newX = Math.random() * (containerWidth - button.clientWidth);
    var newY = Math.random() * (containerHeight - button.clientHeight);

    // Set button's new position
    button.style.position = 'absolute';
    button.style.left = newX + 'px';
    button.style.top = newY + 'px';
}

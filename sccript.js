const board = document.getElementById('board');
const score = document.getElementById('score');
let currentScore = 0;

board.addEventListener('click', function(event) {
    if (event.target.classList.contains('note')) {
        currentScore++;
        score.innerHTML = `Score: ${currentScore}`;
        event.target.remove();
    }
});

setInterval(function() {
    const colors = ['red', 'blue', 'green', 'yellow'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const note = document.createElement('div');
    note.classList.add('note', randomColor);
    note.style.left = Math.floor(Math.random() * (board.offsetWidth - note.offsetWidth)) + 'px';
    board.appendChild(note);

    setTimeout(function() {
        if (note.parentNode === board) {
            note.remove();
        }
    }, 5000);
}, 1000);

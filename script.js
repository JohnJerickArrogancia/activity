const board = document.getElementById('board');
const notes = document.getElementsByClassName('note');
const score = document.getElementById('score');
let currentScore = 0;

for (let i = 0; i < notes.length; i++) {
	notes[i].addEventListener('click', function() {
		currentScore++;
		score.innerHTML = `Score: ${currentScore}`;
		this.remove();
	});
}

setInterval(function() {
	const note = document.createElement('div');
	note.classList.add('note');
	note.style.left = Math.floor(Math.random() * (board.offsetWidth - note.offsetWidth)) + 'px';
	board.appendChild(note);

	setTimeout(function() {
		if (note.parentNode === board) {
			note.remove();
		}
	}, 5000);
}, 1000);

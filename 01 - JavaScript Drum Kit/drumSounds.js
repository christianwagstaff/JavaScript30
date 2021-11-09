function playSound(e) {
    if (e.repeat) return; //stops function from looping if the user hold the key down
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    console.log(e);
}

function removeTransition(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"`);
    if (!key) return;
    key.classList.remove('playing');
}

window.addEventListener('keydown', playSound);
window.addEventListener('keyup', removeTransition)

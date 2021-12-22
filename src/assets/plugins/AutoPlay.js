function AutoPlay() {}

AutoPlay.prototype.run = function (player, btn) {
    btn.classList.remove("fa-play-circle");
    btn.classList.add("fa-pause-circle");
    player.mute();
    player.play();
};

export default AutoPlay;

import MediaPlayer from "../MediaPlayer";

class AutoPlay {
    constructor() { }
    run(player: MediaPlayer, btn) {
        btn.classList.remove("fa-play-circle");
        btn.classList.add("fa-pause-circle");
        player.mute();
        player.play();
    }
}


export default AutoPlay;

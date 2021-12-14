const video = document.querySelector("video");
const btn = document.querySelector("button");
const btn__playPause = document.getElementById("btn_PlayPause");

// Se crea una "clase" tambien se le dan parametros de configuración
function MediaPlayer(config) {
	this.media = config.el;
}

// Para trabajar con clases se crean los metodos por medio de prototype y nombre del metodo
MediaPlayer.prototype.play = function () {
	// this guarda un valor en la instacia de Mediaplayer o cualquier otro objeto
	if (this.media.paused) {
        this.media.play();
        btn__playPause.classList.remove("fa-play-circle")
        btn__playPause.classList.add("fa-pause-circle")
	} else {
        this.media.pause();
        btn__playPause.classList.remove("fa-pause-circle")
        btn__playPause.classList.add("fa-play-circle")
	}
};
const player = new MediaPlayer({ el: video });

btn.onclick = () => {
    player.play()
};

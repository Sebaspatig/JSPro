const btn__playPause = document.getElementById("btn_PlayPause");
const btn__muteUnmute = document.getElementById("btn__muteUnmute");

function MediaPlayer(config) {
	this.media = config.el;
	this.plugins = config.plugins || [];

	this._initPlugins();
}

// Para trabajar con clases se crean los metodos por medio de prototype y nombre del metodo
MediaPlayer.prototype.play = function () {
	// this guarda un valor en la instacia de Mediaplayer o cualquier otro objeto
    this.media.play();
    
};

MediaPlayer.prototype.pause = function () {
	this.media.pause();
};

MediaPlayer.prototype.tooglePlay = function () {
	if (this.media.paused) {
		this.play();
		btn__playPause.classList.remove("fa-play-circle");
		btn__playPause.classList.add("fa-pause-circle");
	} else {
		this.pause();
		btn__playPause.classList.remove("fa-pause-circle");
		btn__playPause.classList.add("fa-play-circle");
	}
};

MediaPlayer.prototype._initPlugins = function () {
    
    this.plugins.forEach(plugin => {
        plugin.run(this, btn__playPause);
    });
}

MediaPlayer.prototype.mute = function () {
    this.media.muted = true
}
MediaPlayer.prototype.unmute = function () {
    this.media.muted = false
}
MediaPlayer.prototype.toogleMute = function () {
    if (this.media.muted) {
		this.unmute();
		btn__muteUnmute.classList.remove("fa-volume-mute");
		btn__muteUnmute.classList.add("fa-volume-up");
	} else {
		this.mute();
		btn__muteUnmute.classList.remove("fa-volume-up");
		btn__muteUnmute.classList.add("fa-volume-mute");
	}
}

export default MediaPlayer;

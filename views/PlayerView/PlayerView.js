class PlayerView {

	// initialization tasks here.
	constructor() {
		console.log("PlayerView is being initialized.");

		this.viewRenderTarget = app.navigator.topPage;

		// load the songId info.
		this.songId = document.querySelector("#appNavigator").topPage.data.songId;

		this.render();
	}

	// render-related tasks here.
	render() {
		console.log("PlayerView is being rendered.", this.songId);

		// load the song record using the local variable: this.songId;
		document.querySelector("#songIdDisplay").innerText = this.songId;
		// render the disc view
		// start the animation
		// render the progress bar
		// load the file 
		// ...

	}

	playPause() {
		// this method triggers the start/stop of the playback.
		// do the play/pause action.
		console.log("Play/Pause!");
	}

	// executed before view is closed
	destroy() {
		console.log("PlayerView is being destroyed.");
	}

}

viewController.registerView("PlayerView", PlayerView);
class PlayerView {

	// initialization tasks here.
	constructor() {
		console.log("PlayerView is being initialized.");

		this.viewRenderTarget = app.navigator.topPage;

		this.render();
	}

	// render-related tasks here.
	render() {
		console.log("PlayerView is being rendered.");

		

	}

	// executed before view is closed
	destroy() {
		console.log("PlayerView is being destroyed.");
	}

}

viewController.registerView("PlayerView", PlayerView);
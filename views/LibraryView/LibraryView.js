class LibraryView {

	// initialization tasks here.
	constructor() {
		console.log("LibraryView is being initialized.");

		this.viewRenderTarget = app.navigator.topPage;

		this.render();
	}

	// render-related tasks here.
	render() {
		console.log("LibraryView is being rendered.");

		

	}

	// executed before view is closed
	destroy() {
		console.log("LibraryView is being destroyed.");
	}

}

viewController.registerView("LibraryView", LibraryView);
class HomeView {

	// initialization tasks here.
	constructor() {
		console.log("HomeView is being initialized.");

		// set the content render target
		this.renderTarget = app.navigator.topPage;

		// clear content
		this.renderTarget.querySelector(".content").innerHTML = " ";

		// invoke the render method.
		this.render();
	}

	// render-related tasks here.
	render() {
		console.log("HomeView is being rendered.");

		this.renderTarget.querySelector(".content").innerHTML = `
		<ons-button onclick="app.switchView('SearchView')">Search View</ons-button>
		<ons-button onclick="app.switchView('LibraryView')">Library View</ons-button>
		<ons-button onclick="app.switchView('PlayerView')">Player View</ons-button>`;



		
	}


	// doSomethingSpecial() {
	// 	// ons.notification.alert("Hey, this is something special.");
	// 	app.switchView("LibraryView");
	// }

	// executed before view is closed
	destroy() {
		console.log("SearchView is being destroyed.");
	}
}

viewController.registerView("HomeView", HomeView);
class SearchView {

	// initialization tasks here.
	constructor() {
		console.log("SearchView is being initialized.");

		this.viewRenderTarget = app.navigator.topPage;

		this.render();
	}

	// render-related tasks here.
	render() {
		console.log("SearchView is being rendered.");

// from onsen
		
		document.addEventListener('prechange', function(event) {
  			document.querySelector('ons-toolbar .center')
    		.innerHTML = event.tabItem.getAttribute('label');
});

	
// to here

	}

	// executed before view is closed
	destroy() {
		console.log("SearchView is being destroyed.");
	}

}

viewController.registerView("SearchView", SearchView);
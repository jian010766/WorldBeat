var app = {
	currentView: null,	//this variable points to the current view controller.
	navigator: null,
	tabBar: null,
	init: () => {

		console.log("App is ready");

		app.navigator = document.querySelector("#appNavigator");

		app.navigator.addEventListener("postpush", app.viewChangeHandler);
		app.navigator.addEventListener("postpop", app.pagePopHandler);


		app.tabBar = document.querySelector("#appTabBar");
		app.tabBar.addEventListener("prechange", app.tabChangeHandler);
		

		// app.switchView("HomeView");

	},
	tabChangeHandler: event => {
		console.log("tab is being changed to ", event.tabItem.getAttribute("data-viewId"));
		var viewId = event.tabItem.getAttribute("data-viewId");
		if(typeof viewController.views[viewId] != 'undefined') {
			// instantiate the view class
			app.currentView = new viewController.views[viewId]();
		}
		else {
			// console.warn("app.viewHandler: Trying to go to a view that doesn't exist", app.navigator.topPage.id);
		}
	},
	tabPopHandler: event => {

	},
	viewChangeHandler: event => {
		console.log("View change occurred", app.navigator.topPage.id);

		if(typeof viewController.views[app.navigator.topPage.id] != 'undefined') {
			// instantiate the view class
			app.currentView = new viewController.views[app.navigator.topPage.id]();
		}
		else {
			console.warn("app.viewHandler: Trying to go to a view that doesn't exist", app.navigator.topPage.id);
		}
	},
	pagePopHandler: event => {
		console.log("View is being popped (postpop): ", event.leavePage);

		if(typeof app.currentView.destroy == 'function')
			app.currentView.destroy();

		// re-instate the view controller for the current page.
		app.viewChangeHandler();
	},
	switchTab: tabId => {
		console.log("app.switchTab: Going to a new tab", tabId);

		var tabId = parseInt(document.querySelector("ons-tab[data-viewId='" + tabId + "']").getAttribute("data-tabIndex"));

		console.log("tab index obtained", tabId);

		app.tabBar.setActiveTab(tabId);
	},
	switchView: (viewId, method='pushPage') => {
		console.log("app.switchView: ", viewId);
		app.navigator[method]("views/" + viewId + "/" + viewId + ".html");

	}
}

var viewController = {
	views: {},
	registerView: (viewClassName, classRef) => {
		viewController.views[viewClassName] = classRef;
	}
}

ons.ready(app.init);
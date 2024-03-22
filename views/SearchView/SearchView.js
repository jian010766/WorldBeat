class SearchView {

	// initialization tasks here.
	constructor() {
		console.log("SearchView is being initialized.");
		this.renderTarget = document.getElementById('SearchView');
		this.renderTarget.querySelector(".content").innerHTML = " ";
		this.viewRenderTarget = app.navigator.topPage;

		this.render();
	}

	// render-related tasks here.
	render() {
		console.log("SearchView is being rendered.");

		this.renderTarget.querySelector(".content").innerHTML = `
			<ons-navigator swipeable id="myNavigator">
				<ons-tabbar swipeable position="auto">
				    <ons-tab onclick="app.switchView('HomeView')" label="MAP" >
				    </ons-tab>
				    <ons-tab label="SEARCH" active>
				    </ons-tab>
				    <ons-tab onclick="app.switchView('LibraryView')" label="LIBRARY" >
				    </ons-tab>
				</ons-tabbar>
			</ons-navigator>

			<div class="searchBox" style="margin: auto;">
		    	<p style="text-align: center; margin-top: 10px;">
				  <ons-search-input
				    placeholder="Search"
				    onchange="ons.notification.alert('Searched for: ' + this.value)">
				    	
				   </ons-search-input>
				</p>
		 	</div>

		 	<div class="center" style="text-align: center; font-size: 30px; padding: 15px;">Filters</div>
	  

		  	<div class="filters" style="text-align: center;">

			  <h3>Era</h3>
			  <ons-select id="choose-sel-era" onchange="editSelects(event)">
			    <option value="1950s">50s</option>
			    <option value="1960s">60s</option>
			    <option value="1950s">70s</option>
			  </ons-select>


			  <h3>Style</h3>
			  <ons-select id="choose-sel-style" onchange="editSelects(event)">
			    <option value="rock">Rock</option>
			    <option value="pop">Pop</option>
			    <option value="folk">Folk</option>
			  </ons-select>


		  	</div>

		`;
		
	}



	
// to here

	

	// executed before view is closed
	destroy() {
		console.log("SearchView is being destroyed.");
	}

}

viewController.registerView("SearchView", SearchView);
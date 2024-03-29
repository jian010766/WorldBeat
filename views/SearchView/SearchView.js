class SearchView {

	// initialization tasks here.
	constructor() {
		console.log("SearchView is being initialized.");
		
		this.viewRenderTarget = app.navigator.topPage;

		this.renderTarget = document.getElementById('SearchView');

		// this.renderTarget.querySelector(".content").innerHTML = " ";

		// this.addEventListeners();
		
		this.render();
	}

	

	// editSelects (event){
	// 	// console.log("app.currentView.editSelects", input);
	// 	document.getElementById("choose-sel-era").removeAttribute("modifier");
	// 	  if (event.target.value == "1950s" || event.target.value == "1960s") {
	// 	    document.getElementById("choose-sel-era").setAttribute("modifier", event.target.value);
	// 	}
	// }



	// render-related tasks here.
	render() {
		console.log("SearchView is being rendered.");

		
	}
	
	


	// addEventListeners() {
		

	// 	document.getElementById("searchInput").addEventListener("input", (event) => {
	// 		ons.notification.alert('Searched for: ' + event.target.value);
	// 	});

	// 	document.getElementById('choose-sel-era').addEventListener('onchange', (event) => {
	// 		editSelects(event);
	// 	});

	// 	document.getElementById('choose-sel-style').addEventListener('onchange', (event) => {
	// 		editSelects(event);
	// 	});
	// }
// to here




	// executed before view is closed
	destroy() {
		console.log("SearchView is being destroyed.");
	}



}
	
	inputListen:() => {
		
		document.getElementById("searchInput").addEventListener("input", (event) => {
			ons.notification.alert('Searched for: ' + event.target.value);
		});

	}



// song list data
	// var songs = [
    // {
    //     "title": "Dancing in the Moonlight",
    //     "artistName": "King Harvest",
    //     "duration": 189,
    //     "countryName": "United States",
    //     "songId": "001"
    // },
    // {
    //     "title": "Bohemian Rhapsody",
    //     "artistName": "Queen",
    //     "duration": 355,
    //     "countryName": "United Kingdom",
    //     "songId": "002"
    // },
    // {
    //     "title": "Imagine",
    //     "artistName": "John Lennon",
    //     "duration": 183,
    //     "countryName": "United Kingdom",
    //     "songId": "003"
    // },
    // {
    //     "title": "Hotel California",
    //     "artistName": "Eagles",
    //     "duration": 390,
    //     "countryName": "United States",
    //     "songId": "004"
    // },
    // {
    //     "title": "Smells Like Teen Spirit",
    //     "artistName": "Nirvana",
    //     "duration": 279,
    //     "countryName": "United States",
    //     "songId": "005"
    // },
    // {
    //     "title": "Stairway to Heaven",
    //     "artistName": "Led Zeppelin",
    //     "duration": 482,
    //     "countryName": "United Kingdom",
    //     "songId": "006"
    // },
    // {
    //     "title": "Hey Jude",
    //     "artistName": "The Beatles",
    //     "duration": 431,
    //     "countryName": "United Kingdom",
    //     "songId": "007"
    // },
    // {
    //     "title": "Like a Rolling Stone",
    //     "artistName": "Bob Dylan",
    //     "duration": 373,
    //     "countryName": "United States",
    //     "songId": "008"
    // },
    // {
    //     "title": "Sweet Child O' Mine",
    //     "artistName": "Guns N' Roses",
    //     "duration": 355,
    //     "countryName": "United States",
    //     "songId": "009"
    // },
    // {
    //     "title": "Wonderwall",
    //     "artistName": "Oasis",
    //     "duration": 258,
    //     "countryName": "United Kingdom",
    //     "songId": "010"
    // },
    // {
    //     "title": "Billie Jean",
    //     "artistName": "Michael Jackson",
    //     "duration": 294,
    //     "countryName": "United States",
    //     "songId": "011"
    // },
    // {
    //     "title": "Yesterday",
    //     "artistName": "The Beatles",
    //     "duration": 124,
    //     "countryName": "United Kingdom",
    //     "songId": "012"
    // },
    // {
    //     "title": "Another Brick in the Wall",
    //     "artistName": "Pink Floyd",
    //     "duration": 239,
    //     "countryName": "United Kingdom",
    //     "songId": "013"
    // },
    // {
    //     "title": "Purple Haze",
    //     "artistName": "Jimi Hendrix",
    //     "duration": 171,
    //     "countryName": "United States",
    //     "songId": "014"
    // },
    // {
    //     "title": "Wish You Were Here",
    //     "artistName": "Pink Floyd",
    //     "duration": 334,
    //     "countryName": "United Kingdom",
    //     "songId": "015"
    // },
    // {
    //     "title": "I Will Always Love You",
    //     "artistName": "Whitney Houston",
    //     "duration": 271,
    //     "countryName": "United States",
    //     "songId": "016"
    // },
    // {
    //     "title": "Nothing Else Matters",
    //     "artistName": "Metallica",
    //     "duration": 389,
    //     "countryName": "United States",
    //     "songId": "017"
    // },
    // {
    //     "title": "Hallelujah",
    //     "artistName": "Leonard Cohen",
    //     "duration": 279,
    //     "countryName": "Canada",
    //     "songId": "018"
    // },
    // {
    //     "title": "Every Breath You Take",
    //     "artistName": "The Police",
    //     "duration": 253,
    //     "countryName": "United Kingdom",
    //     "songId": "019"
    // },
    // {
    //     "title": "Don't Stop Believin'",
    //     "artistName": "Journey",
    //     "duration": 251,
    //     "countryName": "United States",
    //     "songId": "020"
    // }
	// ];

	// function searchSongsByKeyword(keyword) {

	// }

	// function searchSongsByCountryName(countryName) {

	// 	var results = [];

	// 	for(var i = 0; i < songs.length; i ++) {
	// 		if(songs[i].countryName.includes(countryName)) {
	// 			results.push(songs[i]);
	// 		}
	// 	}

	// 	console.log("Search for " + countryName + " completed with results: ", results);

	// 	return results;

	// }



viewController.registerView("SearchView", SearchView);
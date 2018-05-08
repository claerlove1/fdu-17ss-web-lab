const countries = [
    { name: "Canada", continent: "North America", cities: ["Calgary","Montreal","Toronto"], photos: ["canada1.jpg","canada2.jpg","canada3.jpg"] },
    { name: "United States", continent: "North America", cities: ["Boston","Chicago","New York","Seattle","Washington"], photos: ["us1.jpg","us2.jpg"] },
    { name: "Italy", continent: "Europe", cities: ["Florence","Milan","Naples","Rome"], photos: ["italy1.jpg","italy2.jpg","italy3.jpg","italy4.jpg","italy5.jpg","italy6.jpg"] },
    { name: "Spain", continent: "Europe", cities: ["Almeria","Barcelona","Madrid"], photos: ["spain1.jpg","spain2.jpg"] }
];

window.onload=function(){
	let box = "";
	for(let i=0;i<countries.length;i++){
		box += "<div class='item'>";
		
		box += "<h2>"+countries[i].name+"</h2>";
		box += "<h3>"+countries[i].continent+"</h3>";
		box += "<div class='inner-box'>";
		box += "<h3>Cities</h3>";
		for(let j =0;j<countries[i].cities.length;j++){
			box += countries[i].cities[j]+"<br>";
		}	
		box += "</div>";
		box += "<div class='inner-box'>";
		box += "<h3>Populor Photos</h3>";
		for(let j=0;j<countries[i].photos.length;j++){
			box += "<img src = 'images/" + countries[i].photos[j] + "' class = photo>";
		}
		box += "</div>";
		box += "<button>Visit</button>";
		box += "</div>";
	}
	let container = document.getElementsByClassName("flex-container justify")[0];
        container.innerHTML=box+"";

}
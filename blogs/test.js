

/*
var fav_foods = ["fried chicken",
	"birthday cake",
	"turkey meatballs",
	"garlic spinach"];

for (var counter = 0; counter < fav_foods.length; counter ++){
	console.log(fav_foods[counter][0].toUpperCase() 
		+ fav_foods[counter].slice(1) 
		+ " is one of my favorite foods!");
};

for (var counter = 0; counter < fav_foods.length; counter ++){
	if (counter % 2 == 0) {
		console.log(fav_foods[counter][0].toUpperCase() 
		+ fav_foods[counter].slice(1) 
		+ " is an even food!");
	} else {
		console.log(fav_foods[counter][0].toUpperCase() 
		+ fav_foods[counter].slice(1) 
		+ " is an odd food!");
	};
};

var short_foods = [];

for(counter = 0; counter < fav_foods.length; counter ++){
	if(fav_foods[counter].length < 15){
		short_foods.push(fav_foods[counter])
	};
};

console.log(short_foods);

for(counter = 0; counter < fav_foods.length; counter ++){
	fav_foods[counter] = fav_foods[counter] 
	+ "-flavoried potato chips! ";
};

console.log(fav_foods);
*/

var fav_foods = {
	"fried chicken": 1500,
	"birthday cake": 1000,
	"turkey meatballs": 500,
	"garlic spinach": 100,
};

for(var key in fav_foods){
	console.log(key[0].toUpperCase() + key.slice(1) 
		+ " is " + fav_foods[key] + " calories! ");
};



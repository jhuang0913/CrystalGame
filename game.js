


var crystal ={
	win: 0,
	lose: 0,
	totalScore: 0,
	crystals: [1, 2, 3, 4],

	randomNumber: function(first, second){
		var result = Math.floor(Math.random() *second)+first;
			return result;
	},

	result: 0,
};


//Generated number
crystal.totalScore = crystal.randomNumber(19, 120);

console.log(crystal.totalScore);
function random(){
	for (var i = 0; i < crystal.crystals.length; i++){
	crystal.crystals[i]=crystal.randomNumber(1,12);
};
}
random()

// var firstCrystal = crystal.randomNumber(1, 12);
// crystal.crystals.map(function(element, index){
// 	// console.log(element);
// 	crystal.crystals[index] = crystal.randomNumber(1,12);
// });
//crystal.crystals[0] = crystal.randomNumber(1,12);
console.log(crystal.crystals);
// console.log(totalScore);

var jing = $(".crystal p");


//Looping through the crystal from the 
function crystalRandom(){}
for (var i = 0; i<jing.length; i++){


	$(jing[i]).html(crystal.crystals[i]);
}


crystalRandom();

//Add value to the total score
$(".crystal").on("click",function(){
	//Grabbing any value from the children by clicking the parent
	var value = $(this).children(this).text();

	//Converting the string into real number
	var number = parseInt(value);

	//Adding it to the total score
	crystal.result+= number;
	console.log(crystal.result);

	if(crystal.totalScore === crystal.result){

		crystal.win++;
		$('.win').html(crystal.win);
		random();
		crystal.totalScore = crystal.randomNumber(19, 120);
		crystalRandom();

		crystal.result = 0;
	}

});

console.log(crystal.result);












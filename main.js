/*
	Name : Meet shah
	Student Id : 200449122
	Assignment1..
*/
function coffee(){
 	let customerName = document.getElementById("customerName").value;
 	

 	// let drinkType = document.getElementById("DrinkType");
 	// let size = document.getElementById("size").value;
  // 	let drizzle = (document.getElementById("drizzle").checked);
 	// let whippedCream = (document.getElementById("whippedCream").checked);
 	// let sweetner = (document.getElementById("sweetner").checked);
 	// let coldFoam = (document.getElementById("coldFoam").checked);
 	// let dairy = document.getElementById("dairy").value;

 	drinkType = document.getElementsByName("DrinkType");
 	size = document.getElementById("size").value;
  	drizzle = (document.getElementById("drizzle").checked);
 	whippedCream = (document.getElementById("whippedCream").checked);
 	sweetner = (document.getElementById("sweetner").checked);
 	coldFoam = (document.getElementById("coldFoam").checked);
 	dairy = document.getElementById("dairy").value;

 	function order()
 	{
 		console.log(customerName);
 		

 		// Displaying the drink size
 		let drink;
 		
 		let i = 0
 		while(i < 3){
 			if(drinkType[i].checked){
 				drink = drinkType[i].value;
 				console.log(drink);	
 			} 
 			i++;
 		}	
 		
 		console.log(size);
 		

 		// Modifiers
 		if(drizzle == true){
 			console.log(" - drizzle");	
 		}
 		if(whippedCream == true){
 			console.log(" - whippedCream");	
 		}
 		if(sweetner == true){
 			console.log(" - sweetner");
 		}
 		if(coldFoam == true){
 			console.log(" - coldFoam");
 		}
 		
 		console.log(dairy);
 	}
 	order();
 
};


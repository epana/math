/*
var rwc_free_time =  [5,6,7,8,9,10,11,12]
var scott_free_time = [false, false, true, true,...]] // 0 - 24
var bulg_free_time = [false, false, true, true,....]0



  hour = 0
  while (counter < 24) {
 	if (scott_free_time[counter] === true &&
 	rwc_free_time[counter] === true) {
 
 	console.log("both people have free time at hour:", counter)
 	//Am i missing something here
 	}
 }
  
  
  
 //Declare a function
 var function_name = function(argument, argument...) {
  
      return something
 
 }
  
  
 //While loop
 counter = 0
 while (counter < 0) {
 //do something
 counter = counter + 1
 */
var rwc_free_time =  [5,6,7,8,9,10,11,12]

counter = 0
while (counter < rwc_free_time.length) {


	var slotvalue = rwc_free_time[counter];
	if (slotvalue === 10){

		console.log ("10 is here")
		rwc_free_time[counter] = 99


	} else{
		console.log ("10 not here")
	}


	counter = counter+1;

}

console.log (rwc_free_time)

new_counter = 0
while (new_counter < rwc_free_time.length) {

	var newslotvalue = rwc_free_time[new_counter];
	console.log (rwc_free_time[new_counter])

	new_counter = new_counter + 1

}



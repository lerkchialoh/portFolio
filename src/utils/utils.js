function add(x, y) {
	return x+y;
}

function listAddition(x){
	var total = 0;
 for (i = 0; i < x.length; i ++) {
 	total = total + x[i];
 }
 	return total;
}

function subtract(x, y) {
	return x+y;
}

function multiply(x, y) {
	return x*y;
}

function divide(x, y) {
	return x/y;
}

function getTodayDate(){
	const date = new Date();
    
    let year = date.getFullYear();
    
    let month = String(date.getMonth() + 1).padStart(2, '0');
    
    let day = String(date.getDate()).padStart(2, '0');
    
    return day + '/' + month + '/' + year ;
}
function changeDateFormat(date, format){
	var date = new Date(date);
    
    let year = date.getFullYear();
    
    let month = String(date.getMonth() + 1).padStart(2, '0');
    
    let day = String(date.getDate()).padStart(2, '0');
    
    if(format == "dd/MM/yyyy") {
    	return day + '/' + month + '/' + year;
    } else if(format == "yyyy/MM/dd") {
    	return year + '/' + month + '/' + day;
    } else if(format == "MM/dd/yyyy") {
    	return month + '/' + day + '/' + year;
    } else {
    	return date;
    }
}
	
// countdown();
//  function countdown() {
//     var total = 0;
//     document.getElementById("demo").innerHTML = total; 	
    
//  setInterval(function(x) {   
 
//     total = total + 1;
//     document.getElementById("demo").innerHTML = total; 	
// 	}, 1000);
// }
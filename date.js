var d = new Date();
var date = [d.getFullYear(), d.getMonth(),d.getDate(), d.getDay()];
console.log(date);
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novemebr", "December"]
document.getElementById("journalDate").innerHTML = days[date[3]] + ", " + date[2] + " " + months[date[1]] + " " +  d.getFullYear();
var a = prompt("Enter value of a");
var b = prompt("Enter value of b");
var c = prompt("Enter value of c");

var root_part = Math.sqrt(b*b-4*a*c);
var denom = 2*a;
var final_answer1 = (-b+root_part)/denom;
var final_answer2 = (-b-root_part)/denom;

document.write ("Root 1 is " + final_answer1 +"<br/>");
document.write ("Root 2 is " + final_answer2 +"<br/>");
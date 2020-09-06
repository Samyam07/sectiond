//different ways to declare a variable in javascript
/*var a=10;
b=2.5;//we don't need to declare if it is int or float
let c="33";
let e=6;
d=a+b+c;
mod=e%b;
alert("The total is: " +d);
document.write("The ans is: " +d);
document.write("<br/>The remainder is: " +mod);
/*Here, this will give the wrong ans because when we do let c="33" the program takes it as a string
but when we do let c=33, the c won't be taken as a string and the right ans will appear*/
//prompt is to ask users the input

//name=prompt("Enter your name");
//alert("Welcome: " +name);*/

//no parameter no return type
function sumTwo(){
	n1=1;
	n2=2;
	sum=n1+n2;
	alert("The sum is: " +sum);
}

//no or 1 or more parameter with no return type
function callcall(name,age){
	document.write("<br/>Your name is "+name+" and you are "+age+" years old.");
}

//no parameter but there is a return type
function call(){
	nam="Samyam";
	return nam;
}

function f4(n1,n2) {//Even a slight space f4(n1, n2) can give errors
	var sum=n1+n2;
	return sum;
}


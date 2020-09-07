var myImages= new Array("images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.png", "images/5.png", "images/6.png");
var ranNumber=Math.floor(Math.random()*myImages.length);
document.getElementById("randomImages").src=myImages[ranNumber];

function validateForm(){
	var name=document.login.name.value;
	var password=document.login.password.value;

		if(name=="" && password==""){
			document.getElementById("error").innerHTML="Username and password required";
			document.login.name.focus();
			return false;
		}
		else if(name==""){
			document.getElementById("error").innerHTML="Username required";
			document.login.name.focus();
			return false;
		}
		else if(password==""){
			document.getElementById("error").innerHTML="Password required";
			document.login.password.focus();
			return false;
		}
		else if(password.length<6 && password.length>12){
			document.getElementById("error").innerHTML="Password must be 6 to 12 characters long";
			document.login.password.focus();
			return false;
		}
		else if(name=="sam" && password=="hahahaha"){
			window.location="https://youtube.com";
			return false;
		}
		else{
			document.getElementById("error").innerHTML="Username and password are incorrect";
			document.login.name.focus();
			return false;
		}
	return true;
}

function calcSum(){
    var num1 = parseInt(prompt("Enter the number"))
    var num2 = parseInt(prompt("Enter the second Number"))
    var sum= num1+num2;
    document.getElementById("sumResult").innerHTML="<h1>The sum is "+ sum +"</h1>"; 
}


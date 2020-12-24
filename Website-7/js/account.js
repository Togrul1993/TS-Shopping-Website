//Menu Toggle Button start
var MenuItems = document.getElementById('menuItems');
MenuItems.style.maxHeight = "0px";
menutoggle = () => {
	if (MenuItems.style.maxHeight == "0px") {
		MenuItems.style.maxHeight = "200px"
	}
	else {
		MenuItems.style.maxHeight = "0px"
	}
}
//Menu Toggle Button end





//Account Html general start
var LoginForm = document.getElementById('login');
var SingUp = document.getElementById('signUp');
var hrLS = document.getElementById('hrLS');

login = () => {
	SingUp.style.transform = "translateX(300px)";
	LoginForm.style.transform = "translateX(300px)";
	hrLS.style.transform = "translateX(0px)";
}

signUp = () => {
	SingUp.style.transform = "translateX(0px)";
	LoginForm.style.transform = "translateX(0px)";
	hrLS.style.transform = "translateX(100px)"
}
//Account Html general end
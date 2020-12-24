//Menu Toggle Button start
var MenuItems = document.getElementById('menuItems');
MenuItems.style.maxHeight = "0px";


menutoggle = () => {
	if (MenuItems.style.maxHeight == "0px") {
		MenuItems.style.maxHeight = "400px"
	}
	else {
		MenuItems.style.maxHeight = "0px"
	}
}
//Menu Toggle Button end






//Products  Html general start


var ProductImg = document.getElementById('ProductImg');
var SmallImg = document.getElementsByClassName('small-img');

SmallImg[0].onclick = () => {

	ProductImg.src = SmallImg[0].src;

}

SmallImg[1].onclick = () => {
	ProductImg.src = SmallImg[1].src;
}

SmallImg[2].onclick = () => {
	ProductImg.src = SmallImg[2].src;
}

SmallImg[3].onclick = () => {
	ProductImg.src = SmallImg[3].src;
}

//Products  Html general end



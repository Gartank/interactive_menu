const menu_element = document.querySelectorAll(".list__element");
const menu_trigger = document.querySelector(".navbar__buttom");
const navbar = document.querySelector(".navbar")
const navbar_list = document.querySelector(".navbar__list");

let nav_active = false;

menu_trigger.addEventListener("click", () => {

	if( !nav_active ){
		navbar.classList.add("navbar--active");
		navbar_list.classList.add("navbar__list--active")
		nav_active = true;
	}
	else{
		navbar.classList.remove("navbar--active");
		navbar_list.classList.remove("navbar__list--active")
		nav_active = false;
		close_others()
	}
});

menu_element.forEach(element => {
	element.addEventListener("click", () => {
		

		if (element.classList.contains("list__element--active")) {
			element.classList.remove("list__element--active");
		}
		else{
			element.classList.add("list__element--active");
			// element.classList.remove("list__element");
			close_others(element);
		}
	});
});

function close_others( element ) {
	
	menu_element.forEach(elem => {
		if(element != elem) {
			elem.classList.remove("list__element--active");
			// elem.classList.add("list__element");
		}
	});
}
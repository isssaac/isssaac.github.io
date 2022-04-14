// functions for pop up windows
function togglePopup1() {
	document.getElementById("popup-1").classList.toggle("active");
}
function togglePopup2() {
	document.getElementById("popup-2").classList.toggle("active");
}
function togglePopup3() {
	document.getElementById("popup-3").classList.toggle("active");
}
function togglePopup4() {
	document.getElementById("popup-4").classList.toggle("active");
}
function togglePopup5() {
	document.getElementById("popup-5").classList.toggle("active");
}
function togglePopup6() {
	document.getElementById("popup-6").classList.toggle("active");
}
function togglePopup7() {
	document.getElementById("popup-7").classList.toggle("active");
}
function togglePopup8() {
	document.getElementById("popup-8").classList.toggle("active");
}

// Animation on mobile menu button
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar_menu");

const mobileMenu = () => {
	menu.classList.toggle("is-active");
	menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

/*
Fix the bug that mobile menu doesn't close itself 
when Home or Logo being clicked on the homepage
*/
const navLogo = document.querySelector("#navbar_logo");

const hideMobileMenu = () => {
	const menuBars = document.querySelector(".is-active");
	if (window.innerWidth <= 860 && menuBars) {
		menu.classList.toggle("is-active");
		menuLinks.classList.remove("active");
	}
};

menuLinks.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);

// Animation on hero heading of the home page
const heroHeading = document.querySelector(".hero_heading");
const headingSplit = () => {
	heroHeading.style.letterSpacing = "29px";
	setTimeout(() => {
		heroHeading.style.letterSpacing = "";
	}, 700);
};

heroHeading.addEventListener("mouseenter", headingSplit);

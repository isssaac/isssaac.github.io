"use strict";

$(window).on("load", () => {
	const switchButton = document.getElementById("dark-mode");

	switchButton.addEventListener("click", function () {
		document.body.classList.toggle("dark-mode");

		let currentClassName = document.body.className;

		if (currentClassName == "dark-mode") {
			switchButton.innerText = "Light Theme";
		} else {
			switchButton.innerText = "Dark Theme";
		}
	});
});

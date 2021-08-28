const showMenu = (toggleId, navId) => {
	const toggle = document.getElementById(toggleId),
	nav = document.getElementById(navId)

	if (toggle && nav) {
		toggle.addEventListener("click", () => {
			nav.classList.toggle("show")
		})
	}
}

showMenu("nav-toggle", "nav-menu")

const navLink = document.querySelectorAll(".nav__link")

function linkAction() {
	navLink.forEach(n => n.classList.remove("active"))
	this.classList.add("active")

	const navMenu = document.getElementById("nav-menu")
	navMenu.classList.remove("show")
}

navLink.forEach(n => n.addEventListener("click", linkAction))

const sr = ScrollReveal({
	origin: "top",
	distance: "80px",
	duration: 2000,
	reset: true
})

sr.reveal(".home__title", {})
sr.reveal(".button", { delay: 200 })
sr.reveal(".home__img", { delay: 400 })
sr.reveal(".home__social-icon", { interval: 200 })

var counter = 1;

setInterval(function() {
	document.getElementById("radio-" + counter).checked = true;

	counter++;

	if (counter > 2) {
		resetCounter();
	}
}, 10000);

function resetCounter() {
	counter = 1;
}
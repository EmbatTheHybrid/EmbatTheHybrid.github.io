const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', () => {
	menu.classList.toggle('is-active')
	menuLinks.classList.toggle('active')
})

function setRandomImage(element, imageFolder) {
	if (element == null) {
		return;
	}

	element.style.backgroundImage = "url('/images/Previews/" + imageFolder + "/" + (Math.floor(Math.random() * 3) + 1) + ".png"
} 

// Code to make the scroll bar be visible or invisible depending on if you scroll or not

let navbar = document.querySelector(".navbar")

let hadMenuOpen = false;

window.onscroll = function() {
	let currentScrollPos = window.scrollY

	if (currentScrollPos < 100) {
		if (hadMenuOpen) {
			hadMenuOpen = false

			menu.classList.toggle('is-active', true)
			menuLinks.classList.toggle('active', true)
		}
		navbar.style.top = "0px"
	} else {
		if (!hadMenuOpen) {
			hadMenuOpen = menu.classList.contains('is-active')
		}

		menu.classList.toggle('is-active', false)
		menuLinks.classList.toggle('active', false)
		navbar.style.top = "-100px"
	}
}

// The other thing
setRandomImage(document.getElementById('infiniteEmbat'), "Infinite")
setRandomImage(document.getElementById('emsweeper'), "Emsweeper")
setRandomImage(document.getElementById('guessTheCharacter'), "GuessTheCharacter")
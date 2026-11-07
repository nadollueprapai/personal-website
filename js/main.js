const navbar = document.querySelector(".navbar");
const navbarHeader = navbar?.parentElement;
const touchLayout = window.matchMedia("(max-width: 700px), (pointer: coarse)");

if (navbarHeader) {
	let lastScrollY = window.scrollY;

	window.addEventListener("scroll", () => {
		if (!touchLayout.matches) {
			navbarHeader.classList.remove("navbar-hidden");
			lastScrollY = window.scrollY;
			return;
		}

		const currentScrollY = window.scrollY;

		if (currentScrollY <= navbarHeader.offsetHeight || currentScrollY < lastScrollY - 4) {
			navbarHeader.classList.remove("navbar-hidden");
		} else if (currentScrollY > lastScrollY + 4) {
			navbarHeader.classList.add("navbar-hidden");
		}

		lastScrollY = currentScrollY;
	}, { passive: true });
}

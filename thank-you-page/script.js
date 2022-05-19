(() => {
	const searchParams = new URLSearchParams(window.location.search);
	const name = searchParams.get("email");
	console.log(name);
	const domName = document.querySelector("[data-email]");
	console.log(domName);

	if (domName) {
		domName.textContent = "Your Email: " + email + " has been received!";
	}
})();

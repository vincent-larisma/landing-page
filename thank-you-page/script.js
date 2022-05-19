(() => {
	const searchParams = new URLSearchParams(window.location.search);
	const email = searchParams.get("email");
	console.log(email);
	const domName = document.querySelector("[data-email]");
	console.log(domName);

	if (domName) {
		domName.textContent =
			"Please check your email(" +
			email +
			") for further instructions on how to complete your account setup.";
	}
})();

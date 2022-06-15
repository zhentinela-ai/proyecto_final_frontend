export default document.addEventListener("keyup", (e) => {
	if (e.target.matches("#buscador")) {
		document.querySelectorAll(".cancion").forEach((cancion) => {
			cancion.textContent
				.toLowerCase()
				.includes(e.target.value.toLowerCase())
				? cancion.classList.remove("filtro")
				: cancion.classList.add("filtro");
		});
	}
});

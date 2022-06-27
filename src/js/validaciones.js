// document.getElementById("validar").addEventListener("click", (e) => {
// 	e.preventDefault()
// 	var expresion_regular;
// 	var email = document.getElementById("email");
// 	var password = document.getElementById("password");

// });

const validar = (form) => {
	if (form.email.value.trim().length === 0) {
		alert("email");
		return false;
	}

	return true;
}

export default validar;

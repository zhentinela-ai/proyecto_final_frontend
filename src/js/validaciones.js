export const validarCorreo = (value) => {
	// var email = e.target.value;
	var email = value;

	var emailReg = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

	var valido = document.getElementById("emailOK");
	var icon = document.getElementById("icono_email");

	if (email.length === 0) {
		valido.innerText = "Correo obligatorio";
		valido.style.color = "red";
		icon.style.color = "red";
		return false;
	} else {
		valido.style.visibility = "visible";
		if (!emailReg.test(email)) {
			valido.innerText = "Correo incorrecto";
			valido.style.color = "orange";
			icon.style.color = "orange";
			return false;
		} else {
			valido.innerText = "Correo válido";
			valido.style.color = "green";
			icon.style.color = "green";
			return true;
		}
	}
};

export const validarConstraseña = (value) => {
	var password = value;

	var valido = document.getElementById("passwordOK");
	var icon = document.getElementById("icono_password");

	if (password.length <= 8) {
		valido.innerText = "La contraseña debe tener más de 8 caracteres";
		valido.style.color = "red";
		icon.style.color = "red";
		if (password.length === 0) {
			valido.innerText = "Contraseña obligatoria";
		}
		return false;
	} else {
		valido.innerText = "Contraseña válida";
		valido.style.color = "green";
		icon.style.color = "green";
		return true;
	}
};

export const validarConfirmacionConstraseña = (value) => {
	var passwordConfirm = value;
	var password = document.getElementById("password").value;
	var valido = document.getElementById("passwordConfirmOK");
	var icon = document.getElementById("icono_confirm_password");

	if (passwordConfirm.length === 0) {
		valido.innerText = "Contraseña obligatoria";
		valido.style.color = "red";
		icon.style.color = "red";
		return false;
	} else if (passwordConfirm === password) {
		valido.innerText = "Contraseña validada";
		valido.style.color = "green";
		icon.style.color = "green";
		return true;
	} else {
		valido.innerText = "Las contraseñas deben coincidir";
		valido.style.color = "orange";
		icon.style.color = "orange";
		return false;
	}
};

export const validarGenero = (target) => {
	var genero = target.value;
	var valido = document.getElementById("generoOK");

	if (genero === "seleccionar") {
		valido.innerText = "Debes seleccionar un género";
		valido.style.color = "red";
		return false;
	} else {
		valido.innerText = "";
		return true;
	}
};

export const validarEdad = (rango) => {
	var valido = document.getElementById("edadOK");

	if (rango) {
		valido.innerText = "Debes seleccionar un rango de edad";
		valido.style.color = "red";
		return true;
	} else {
		valido.innerText = "";
		return false;
	}
};

export const validarTerminos = (change) => {
	var valido = document.getElementById("terminosOK");
	var terminos = document.getElementById("terminos");

	if (change === true) {
		if (!terminos.checked) {
			valido.innerText = "Debes aceptar los términos";
			valido.style.color = "red";
			terminos.value = "on";
			return false;
		}
		if (terminos.checked) {
			valido.innerText = "";
			terminos.value = "off";
			return true;
		}
	} else {
		valido.innerText = "Debes aceptar los términos";
		valido.style.color = "red";
		return false;
	}
};

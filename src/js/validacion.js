/* eslint-disable no-restricted-globals */
import { toast } from "react-toastify";
import {
	validarTerminos,
	validarGenero,
	validarEdad,
	validarConfirmacionConstraseña,
	validarConstraseña,
	validarCorreo,
} from "../js/validaciones";

export const validar = (e) => {
	e.preventDefault();
	const notify = () => toast("Registro exitoso");

	if (!validarCorreo(e.target[0].value) === true) {
		e.target[0].autofocus = true;
		location.href = "#email";
		return false;
	}
	if (!validarConstraseña(e.target[1].value)) {
		location.href = "#password";
		return false;
	}
	if (!validarConfirmacionConstraseña(e.target[2].value)) {
		location.href = "#passwordConfirm";
		return false;
	}
	if (!validarGenero(e.target[3])) {
		location.href = "#genero";
		return false;
	}
	if (
		validarEdad(e.target[5].checked) === true &&
		validarEdad(e.target[6].checked) === true &&
		validarEdad(e.target[7].checked) === true
	) {
		location.href = "#menor";
		return false;
	}
	if (!validarTerminos(true)) {
		location.href = "#terminos";
		return false;
	}
	notify()
	return true;
};
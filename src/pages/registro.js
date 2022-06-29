import { MdAttachEmail } from "react-icons/md";
import { AiTwotoneLock } from "react-icons/ai";
import { AiTwotoneUnlock } from "react-icons/ai";

import styles from "../css/inputs.module.css";

import { useState } from "react";
import { RadioGroup } from "../components/RadioGroup";
import { Dropdown } from "../components/Dropdown";

import {
	validarCorreo,
	validarConstraseña,
	validarConfirmacionConstraseña,
} from "../js/validaciones";

export default function Registro() {
	const [showPassword, setShowPassword] = useState(false);
	const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

	var password = document.getElementById("password");
	var passwordConfirm = document.getElementById("passwordConfirm");

	const mostrarContraseña = () => {
		if (password.type === "password") {
			password.type = "text";
			setShowPassword(true);
		} else {
			password.type = "password";
			setShowPassword(false);
		}
	};

	const mostrarContraseñaConfirmada = () => {
		if (passwordConfirm.type === "password") {
			passwordConfirm.type = "text";
			setShowPasswordConfirm(true);
		} else {
			passwordConfirm.type = "password";
			setShowPasswordConfirm(false);
		}
	};

	return (
		<form onSubmit="">
			<div className="container">
				<div className="card w-40">
					<div className="card-header">
						<h1>Registro</h1>
					</div>
					<div className="card-body">
						<div className="form-group">
							<label className="p-2">Correo electrónico *</label>
							<div className={styles.container}>
								<input
									className={styles.input_register}
									placeholder="Correo electrónico"
									onBlur={(e) => {
										const validar = validarCorreo(e)
										var email = document.getElementById("emailOK");
										if (validar === true) {
											email.innerText = "";
										}
									}}
									onChange={validarCorreo}
								/>
								<MdAttachEmail
									id="icono_email"
									className={styles.icon_right}
								/>
							</div>
						</div>
						<span className="p-2" id="emailOK"></span>

						<div className="form-group">
							<label className="p-2">Contraseña *</label>
							<div className={styles.container}>
								<input
									type="password"
									id="password"
									className={styles.input_register}
									placeholder="Contraseña"
									onBlur={(e) => {
										const validar = validarConstraseña(e)
										var email = document.getElementById("passwordOK");
										if (validar === true) {
											email.innerText = "";
										}
									}}
									onChange={validarConstraseña}
								/>
								<div className="text-disable">
									{showPassword ? (
										<AiTwotoneUnlock
											onClick={mostrarContraseña}
											id="icono_password"
											className={styles.icon_right}
										/>
									) : (
										<AiTwotoneLock
											onClick={mostrarContraseña}
											id="icono_password"
											className={styles.icon_right}
										/>
									)}
								</div>
							</div>
							<span className="p-2" id="passwordOK"></span>
						</div>

						<div className="form-group">
							<label className="p-2">
								Confirmación de contraseña *
							</label>
							<div className={styles.container}>
								<input
									type="password"
									id="passwordConfirm"
									className={styles.input_register}
									placeholder="Confirmar contraseña"
									onBlur={(e) => {
										const validar = validarConfirmacionConstraseña(e)
										var email = document.getElementById("passwordConfirmOK");
										if (validar === true) {
											email.innerText = "";
										}
									}}
									onChange={validarConfirmacionConstraseña}
								/>
								<div className="text-disable">
									{showPasswordConfirm ? (
										<AiTwotoneUnlock
											onClick={
												mostrarContraseñaConfirmada
											}
											id="icono_confirm_password"
											className={styles.icon_right}
										/>
									) : (
										<AiTwotoneLock
											onClick={
												mostrarContraseñaConfirmada
											}
											id="icono_confirm_password"
											className={styles.icon_right}
										/>
									)}
								</div>
							</div>
							<span className="p-2" id="passwordConfirmOK"></span>
						</div>

						<Dropdown />

						<RadioGroup />

						<div className="form-group">
							<div className="form-input">
								<input
									type="checkbox"
									className="p-2"
									onChange=""
								/>
								<label>Acepto los términos de uso *</label>
							</div>
						</div>

						<p className="text-success">* Campos obligatorio</p>

						<button
							className="btn btn-primary p-2 m-auto"
							id="validar"
						>
							Continuar
						</button>
					</div>
				</div>
			</div>
		</form>
	);
}

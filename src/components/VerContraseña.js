import { AiTwotoneLock } from "react-icons/ai";
import { AiTwotoneUnlock } from "react-icons/ai";

import styles from "../css/inputs.module.css";

import { useRef, useState } from "react";

import {
	validarConstraseña,
	validarConfirmacionConstraseña,
} from "../js/validaciones";

function VerContraseña() {
	const [showPassword, setShowPassword] = useState(false);
	const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

	var password = useRef(null);
	var passwordConfirm = useRef(null);

	const mostrarContraseña = () => {
		if (password.current.type === "password") {
			password.current.type = "text";
			setShowPassword(true);
		} else {
			password.current.type = "password";
			setShowPassword(false);
		}
	};

	const mostrarContraseñaConfirmada = () => {
		if (passwordConfirm.current.type === "password") {
			passwordConfirm.current.type = "text";
			setShowPasswordConfirm(true);
		} else {
			passwordConfirm.current.type = "password";
			setShowPasswordConfirm(false);
		}
	};

	var passwordOK = useRef(null);
	var passwordConfirmOK = useRef(null);

	return (
		<div>
			<div className="form-group">
				<label className="p-2">Contraseña *</label>
				<div className={styles.container}>
					<input
						type="password"
						ref={password}
						id="password"
						name="password"
						className={styles.input_register}
						placeholder="Contraseña"
						onBlur={(e) => {
							const validar = validarConstraseña(e.target.value);
							if (validar === true) {
								passwordOK.current.innerText = "";
							}
						}}
						onChange={(e) => validarConstraseña(e.target.value)}
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
				<span className="p-2" id="passwordOK" ref={passwordOK}></span>
			</div>

			<div className="form-group">
				<label className="p-2">Confirmación de contraseña *</label>
				<div className={styles.container}>
					<input
						type="password"
						name="passwordConfirm"
						id="passwordConfirm"
						ref={passwordConfirm}
						className={styles.input_register}
						placeholder="Confirmar contraseña"
						onBlur={(e) => {
							const validar = validarConfirmacionConstraseña(
								e.target.value
							);
							if (validar === true) {
								passwordConfirmOK.current.innerText = "";
							}
						}}
						onChange={(e) =>
							validarConfirmacionConstraseña(e.target.value)
						}
					/>
					<div className="text-disable">
						{showPasswordConfirm ? (
							<AiTwotoneUnlock
								onClick={mostrarContraseñaConfirmada}
								id="icono_confirm_password"
								className={styles.icon_right}
							/>
						) : (
							<AiTwotoneLock
								onClick={mostrarContraseñaConfirmada}
								id="icono_confirm_password"
								className={styles.icon_right}
							/>
						)}
					</div>
				</div>
				<span
					className="p-2"
					id="passwordConfirmOK"
					ref={passwordConfirmOK}
				></span>
			</div>
		</div>
	);
}

export default VerContraseña;

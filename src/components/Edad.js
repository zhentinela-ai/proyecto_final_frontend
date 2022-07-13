import { useState } from "react";
import { validarEdad } from "../js/validaciones";

export function Edad() {
	const [menorA, setMenorA] = useState(true);
	const [entre, setEntre] = useState(true);
	const [mayorA, setMayorA] = useState(true);

	const seleccion = () => {
		if (menorA === true && entre === true && mayorA === true) {
			return true;
		} else {
			return false;
		}
	};

	const validacion = () => {
		const seleccionar = seleccion();

		if (seleccionar === true) {
			validarEdad(false);
		} else {
			validarEdad(true);
		}
	};

	return (
		<div className="form-group">
			<fieldset className="p-2">
				<legend className="p-2">Edad *</legend>
				<div className="form-row p-0 m-0">
					<input
						type="radio"
						className="p-2"
						id="menor"
						checked={!menorA}
						onClick={() => {
							setMenorA(!menorA);
							setEntre(true);
							setMayorA(true);
							validarEdad(false);
							validacion();
						}}
						onFocus={
							(menorA === true) &
							(entre === true) &
							(mayorA === true)
								? () => validarEdad(true)
								: () => validarEdad(false)
						}
						onChange={() => validarEdad(false)}
						readOnly
					/>
					<label>Menor a 20</label>
				</div>
				<div className="form-row p-0 m-0">
					<input
						type="radio"
						className="p-2"
						checked={!entre}
						id="entre"
						onClick={() => {
							setEntre(!entre);
							setMenorA(true);
							setMayorA(true);
							validacion();
						}}
						onFocus={
							(menorA === true) &
							(entre === true) &
							(mayorA === true)
								? () => validarEdad(true)
								: () => validarEdad(false)
						}
						onChange={() => validarEdad(false)}
						readOnly
					/>
					<label>20 a 40</label>
				</div>
				<div className="form-row p-0 m-0">
					<input
						type="radio"
						className="p-2"
						checked={!mayorA}
						id="mayor"
						onClick={() => {
							setMayorA(!mayorA);
							setEntre(true);
							setMenorA(true);
							validacion();
						}}
						onFocus={
							(menorA === true) &
							(entre === true) &
							(mayorA === true)
								? () => validarEdad(true)
								: () => validarEdad(false)
						}
						onChange={() => validarEdad(false)}
						readOnly
					/>
					<label>Mayor a 50</label>
				</div>
				<span className="p-2" id="edadOK"></span>
			</fieldset>
		</div>
	);
}

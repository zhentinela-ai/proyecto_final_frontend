import { useState } from "react";
import { validarGenero } from "../js/validaciones";

export function Genero() {
	const [seleccionar, setSeleccionar] = useState(true);

	return (
		<div className="form-group">
			<label className="p-2">Género musical favorito *</label>
			<select
				className="p-2"
				name="genero"
				id="genero"
				onClick={() => setSeleccionar(!seleccionar)}
				onFocus={(e) => validarGenero(e.target)}
				onChange={(e) => {
					validarGenero(e.target);
					setSeleccionar(!seleccionar);
				}}
			>
				<option value="seleccionar" disabled={seleccionar}>
					Seleccione...
				</option>
				<option value="rock">Rock</option>
				<option value="balada">Balada</option>
				<option value="salsa">Salsa</option>
				<option value="otro">Otro</option>
			</select>
			<span className="p-2" id="generoOK"></span>
		</div>
	);
}

import { useState } from "react";
import { validarGenero } from "../js/validaciones";

export function Dropdown() {
	const [seleccionar, setSeleccionar] = useState(false);
	return (
		<div className="form-group">
			<label className="p-2">Género musical favorito *</label>
			<select
				className="p-2"
				name="genero"
				id="genero"
				onClick={() => setSeleccionar(!seleccionar)}
				onFocus={validarGenero}
				onChange={(e) => {
					validarGenero(e)
					setSeleccionar(!seleccionar)
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

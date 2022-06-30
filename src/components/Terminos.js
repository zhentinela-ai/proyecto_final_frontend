import { validarTerminos } from "../js/validaciones";
import { useRef } from "react";

function Terminos() {
	const terminos = useRef(null);
	var current = terminos.current;

	return (
		<div className="form-group">
			<div className="form-input">
				<input
					type="checkbox"
					className="p-2"
					name="terminos"
					id="terminos"
					ref={terminos}
					onChange={() => validarTerminos(current, true)}
					onFocus={() => {
						if (current === "on") validarTerminos(current, true);
					}}
				/>
				<label>Acepto los términos de uso *</label>
			</div>
			<span className="p-2" id="terminosOK"></span>
		</div>
	);
}

export default Terminos;

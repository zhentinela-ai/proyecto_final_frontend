import { validarTerminos } from "../js/validaciones";
import { useRef, useEffect, useState } from "react";

function Terminos() {
	const [current, setCurrent] = useState();
	const terminos = useRef(null);
	useEffect(() => {
		setCurrent(terminos.current);
	}, []);

	return (
		<div className="form-group">
			<div className="form-row">
				<input
					type="checkbox"
					className="p-2"
					name="terminos"
					id="terminos"
					ref={terminos}
					onChange={() => validarTerminos(true)}
					onFocus={() => {
						if (current.value === "on") {
							validarTerminos(current, true);
						}
					}}
				/>
				<label>Acepto los términos de uso *</label>
			</div>
			<span className="p-2" id="terminosOK"></span>
		</div>
	);
}

export default Terminos;

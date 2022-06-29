import { useState } from "react";

export function RadioGroup() {
	const [menorA, setMenorA] = useState(false);
	const [entre, setEntre] = useState(false);
	const [mayorA, setMayorA] = useState(false);

	return (
		<div className="form-group">
			<fieldset className="p-2">
				<legend className="p-2">Edad *</legend>
				<div className="form-input p-0 m-0">
					<input
						type="radio"
						className="p-2"
						checked={menorA}
						onClick={() => {
							setMenorA(!menorA);
							setEntre(false);
							setMayorA(false);
						}}
					/>
					<label>Menor a 20</label>
				</div>
				<div className="form-input p-0 m-0">
					<input
						type="radio"
						className="p-2"
						checked={entre}
						onClick={() => {
							setEntre(!entre);
							setMenorA(false);
							setMayorA(false);
						}}
					/>
					<label>20 a 40</label>
				</div>
				<div className="form-input p-0 m-0">
					<input
						type="radio"
						className="p-2"
						checked={mayorA}
						onClick={() => {
							setMayorA(!mayorA);
							setEntre(false);
							setMenorA(false);
						}}
					/>
					<label>Mayor a 50</label>
					<span className="p-2" id="passwordOK"></span>
				</div>
			</fieldset>
		</div>
	);
}

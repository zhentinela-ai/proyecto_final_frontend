import validar from "../js/validaciones";

export default function InicioSesion() {
	const handleSubmit = (e) => {
		e.preventDefault();

		var email = document.getElementById("email");
		console.log(email.value);
	};

	const val = (e) => {
		var email = e.target.value;

		var emailReg =
			/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

		var valido = document.getElementById("emailOK");

		if (email.length === 0) {
			alert("Correo obligatorio");
			return false;
		}

		if (!emailReg.test(email)) {
			valido.innerText = "Correo incorrecto";
			return false;
		} else {
			valido.innerText = "Correo válido";
			return true;
		}

		console.log(email);
		return true;
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="container">
				<div className="card w-40">
					<div className="card-header">
						<h1>Inicio Sesion</h1>
					</div>
					<div className="card-body">
						<div className="form-group">
							<label htmlFor="email" className="p-2">
								Correo electrónico
							</label>
							<input
								type="text"
								className="p-2"
								name="email"
								id="email"
								placeholder="Correo electrónico"
								autoFocus
								onChange={val}
							/>
							<span
								// className="text-danger p-2"
								className={
									val ? "text-success p-2" : "text-danger p-2"
								}
								id="emailOK"
							>
								J
							</span>
							<label htmlFor="password" className="p-2">
								Contraseña
							</label>

							<input
								type="password"
								name="password"
								id="password"
								className="p-2"
								placeholder="Contraseña"
							/>
							<button
								className="btn btn-primary p-2 m-auto"
								id="validar"
								// onClick={validar}
							>
								Continuar
							</button>
						</div>
					</div>
				</div>
			</div>
		</form>
	);
}

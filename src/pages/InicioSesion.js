import { validarConstraseña, validarCorreo } from "../js/validaciones";

import { GiSoundWaves } from "react-icons/gi";

import styles from "../css/inputs.module.css";

export default function InicioSesion() {
	const handleSubmit = (e) => {
		e.preventDefault();
		alert("Bienvenido a OYE");
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
							<label className="p-2">Correo electrónico</label>
							<div className={styles.container}>
								<input
									className={styles.input_register}
									placeholder="Correo electrónico"
									autoFocus
									onChange={(e) =>
										validarCorreo(e.target.value)
									}
								/>
								<GiSoundWaves
									className={styles.icon_right}
									id="icono_email"
								/>
							</div>
							<span className={"p-2"} id="emailOK"></span>
							<label className="p-2">Contraseña</label>

							<div className={styles.container}>
								<input
									type="password"
									className={styles.input_register}
									placeholder="Contraseña"
									onChange={(e) =>
										validarConstraseña(e.target.value)
									}
								/>
								<GiSoundWaves
									className={styles.icon_right}
									id="icono_password"
								/>
							</div>
							<span className="p-2" id="passwordOK"></span>
							<button
								className="btn btn-primary p-2 m-auto"
								id="validar"
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

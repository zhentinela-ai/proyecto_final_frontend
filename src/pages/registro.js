import { MdAttachEmail } from "react-icons/md";
import { Edad } from "../components/Edad";
import { Genero } from "../components/Genero";

import { validarCorreo } from "../js/validaciones";
import { validar } from "../js/validacion";

import styles from "../css/inputs.module.css";

import VerContraseña from "../components/VerContraseña";
import Terminos from "../components/Terminos";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Registro() {
	return (
		<form onSubmit={(e) => validar(e)}>
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
								name="email"
								id="email"
								placeholder="Correo electrónico"
								onChange={(e) => validarCorreo(e.target.value)}
								autoFocus
								onBlur={(e) => {
									const validar = validarCorreo(
										e.target.value
									);
									var email =
										document.getElementById("emailOK");
									if (validar === true) {
										email.innerText = "";
									}
								}}
							/>
							<MdAttachEmail
								id="icono_email"
								className={styles.icon_right}
							/>
						</div>
					</div>
					<span className="p-2" id="emailOK"></span>

					<VerContraseña />

					<Genero />

					<Edad />

					<Terminos />

					<p className="text-success">* Campos obligatorio</p>

					<button className="btn btn-primary p-2 m-auto" id="validar">
						Continuar
					</button>
					<ToastContainer autoClose={1500} />
				</div>
			</div>
		</form>
	);
}
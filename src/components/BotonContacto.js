import { VscEyeClosed } from "react-icons/vsc";
import { NavLink, useNavigate } from "react-router-dom";

export default function BotonContacto() {
	const navigate = useNavigate();

	return (
		<div className="container">
			<div className="modal" id="modal">
				<div className="modal-contenido">
					<div className="form-input justify-content-between">
						<h2>Contacto</h2>
						<NavLink to="#modal">
							<VscEyeClosed />
						</NavLink>
					</div>
					<hr />
					<div className="form-group text-center">
						<p>contacto@oye.com</p>
						<p>+57 - 321 - 753 - 7816</p>
					</div>
					<hr />
					<button
						className="btn btn-primary"
						onClick={() => navigate("#ocultarModal")}
					>
						Cerrar
					</button>
				</div>
			</div>
		</div>
	);
}

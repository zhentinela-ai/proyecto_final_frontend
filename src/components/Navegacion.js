import logo from "../images/logo.png";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navegacion() {
	const navigate = useNavigate();

	return (
		<div className="font-family-charis-sil">
			<header>
				<div className="container bg-dark">
					<div className="d-flex flex-direction-row justify-content-between">
						<div className="form-input">
							<img src={logo} alt="Logo" className="logo" />
							<h1 className="titulo-h1 text-blue">OYE</h1>
						</div>
						<div className="form-input">
							<ul>
								<li>
									<NavLink
										className="navegacion bg-dark"
										to="/"
									>
										Inicio
									</NavLink>
								</li>
								<li>
									<NavLink
										className="navegacion bg-dark"
										to="/canciones"
									>
										Canciones
									</NavLink>
								</li>
							</ul>
						</div>
						<div className="form-input">
							{/* <button
								className="btn btn-secondary btn-hover"
								onClick={() => navigate("#modal")}
							>
								Contacto
							</button> */}
							<a
								href="#modal"
								className="btn btn-secondary btn-hover"
							>
								Contacto
							</a>
							<button
								className="btn btn-secondary btn-hover-brillo"
								onClick={() => navigate("/inicio_sesion")}
							>
								Inicio Sesion
							</button>
							<button
								className="btn btn-secondary btn-hover-brillo"
								onClick={() => navigate("/registro")}
							>
								Registro
							</button>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
}

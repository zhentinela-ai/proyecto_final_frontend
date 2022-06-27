import logo from "../images/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useModal } from "../context/ModalContext";

const Navegacion = () => {
	const navigate = useNavigate();

	const { abrirModal } = useModal();

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
							<button
								className="btn btn-secondary btn-hover"
								onClick={abrirModal}
							>
								Contacto
							</button>
							{/* <a
								href="#modal"
								className="btn btn-secondary btn-hover"
							>
								Contacto
							</a> */}
							<button
								className="btn btn-secondary"
								onClick={() => navigate("/inicio_sesion")}
							>
								Inicio Sesion
							</button>
							<button
								className="btn btn-secondary"
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
};

export default Navegacion;

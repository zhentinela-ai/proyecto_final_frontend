import logo from "../images/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useModal } from "../context/ModalContext";

import { BsMenuUp } from "react-icons/bs";

const Navegacion = ({abrirMenu}) => {
	const navigate = useNavigate();

	const { abrirModal } = useModal();

	return (
		<div className="font-family-charis-sil">
			<header>
				<div className="container bg-dark">
					<div className="d-flex flex-direction-row justify-content-between">
						<div className="form-row">
							<img src={logo} alt="Logo" className="logo" />
							<h1 className="titulo-h1 text-blue">OYE</h1>
						</div>
						<input
							type="checkbox"
							id="menu-bar"
							onClick={abrirMenu}
						/>
						<label htmlFor="menu-bar">
							<BsMenuUp
								style={{
									padding: "15px",
									border: "2px solid #f3f3f3",
									borderRadius: "15px",
								}}
							/>
						</label>
						<nav className="navbar form-input">
							<div className="form-input">
								<ul className="m-auto pl-6 w-100">
									<li>
										<NavLink
											className="navegacion bg-dark"
											to="/"
										>
											Inicio
										</NavLink>
									</li>
								</ul>
								<ul className="m-auto pr-6 w-100">
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
							<div className="form-input button-group">
								<button
									className="btn btn-secondary btn-hover"
									onClick={abrirModal}
								>
									Contacto
								</button>
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
						</nav>
					</div>
				</div>
			</header>
		</div>
	);
};

export default Navegacion;

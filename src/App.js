import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/bootstrap.css";

// Se importar las Páginas
import Inicio from "./pages/Inicio";
import Canciones from "./pages/Canciones";
import Registro from "./pages/Registro";
import InicioSesion from "./pages/InicioSesion";

// Se importa los Componentes
import Navegacion from "./components/Navegacion";
import BotonContacto from "./components/BotonContacto";
import { ModalProvider } from "./context/ModalContext";
import PiePagina from "./components/PiePagina";

import { useState, useEffect } from "react";

function App() {
	const [menu, setMenu] = useState(false);
	const [main, setMain] = useState(0);

	const abrirMenu = () => {
		const menu = document.getElementById("menu-bar");
		setMenu(menu.checked);
	};

	window.onresize = (e) => {
		setMain(e.target.innerWidth);
	};

	useEffect(() => {
		if (main > 820) {
			setMenu(false);
		} else {
			abrirMenu();
		}
	}, [main]);

	const styles = {
		container: {
			position: "absolute",
			top: "400px",
		},
	};

	return (
		<div className="font-family-joan vh-100" id="main">
			<BrowserRouter>
				<ModalProvider>
					<Navegacion abrirMenu={abrirMenu} />
					<BotonContacto />
				</ModalProvider>

				<div className="container" style={menu ? styles.container : {}}>
					<Routes>
						<Route path="/" element={<Inicio />} />
						<Route path="/canciones" element={<Canciones />} />
						<Route path="/registro" element={<Registro />} />
						<Route
							path="/inicio_sesion"
							element={<InicioSesion />}
						/>
					</Routes>
				</div>
				<PiePagina />
			</BrowserRouter>
		</div>
	);
}

export default App;

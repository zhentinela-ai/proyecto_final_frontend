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

function App() {
	return (
		<div className="font-family-joan vh-100">
			<BrowserRouter>
				<ModalProvider>
					<Navegacion />
					<BotonContacto />
				</ModalProvider>


				<Routes>
					<Route path="/" element={<Inicio />} />
					<Route path="/canciones" element={<Canciones />} />
					<Route path="/registro" element={<Registro />} />
					<Route path="/inicio_sesion" element={<InicioSesion />} />
				</Routes>

				<PiePagina />
			</BrowserRouter>
		</div>
	);
}

export default App;

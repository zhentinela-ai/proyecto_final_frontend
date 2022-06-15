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

function App() {
	return (
		<div className="font-family-joan">
			<BrowserRouter>
				<Navegacion />

				<BotonContacto />

				<Routes>
					<Route path="/" element={<Inicio />} />
					<Route path="/canciones" element={<Canciones />} />
					<Route path="/registro" element={<Registro />} />
					<Route path="/inicio_sesion" element={<InicioSesion />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

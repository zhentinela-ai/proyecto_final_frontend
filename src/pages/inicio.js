import reel_1 from "../images/reel_1.jpg";
import reel_2 from "../images/reel_2.jpg";
import reel_3 from "../images/reel_3.jpg";
import reel_4 from "../images/reel_4.jpg";

import datos from "../datos.json";
import { useNavigate } from "react-router-dom";

const canciones = datos.canciones;
const top3 = canciones.filter((dato) => dato.reproducciones >= 70);

export default function Inicio() {
	const navigate = useNavigate()

	return (
		<div>
			<div className="container">
				<div className="card">
					<div className="card-header">
						<div className="form-input">
							<div className="form-group">
								<h2 className="m-3">
									¡Bienvenido a OYE tu página web de música
									gratuita!
								</h2>
								<p className="m-3">
									Aquí podrás escuchar música cuando lo desees
								</p>
								<button className="btn btn-primary btn-hover-brillo m-3" onClick={() => navigate("/canciones")}>
									Ver Canciones
								</button>
							</div>
							<div className="carrusel autodeslizar">
								<div className="carrusel-inner">
									<div className="carrusel-item">
										<img src={reel_1} alt="reel1" />
									</div>
									<div className="carrusel-item">
										<img src={reel_2} alt="reel2" />
									</div>
									<div className="carrusel-item">
										<img src={reel_3} alt="reel3" />
									</div>
									<div className="carrusel-item">
										<img src={reel_4} alt="reel4" />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="card-body">
						<h2 className="text-center">Top 3</h2>
						<table className="table">
							<thead>
								<tr>
									<th>Nombre</th>
									<th>Canción</th>
								</tr>
							</thead>

							<tbody>
								{top3.map((top, i) => (
									<tr key={i}>
										<td>{top.nombre}</td>
										<td>
											<audio
												src={`./${top.ruta}`}
												controls
											></audio>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}

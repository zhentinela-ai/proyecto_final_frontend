import icon_1 from "../images/icon_1.svg";
import icon_2 from "../images/icon_2.svg";
import icon_3 from "../images/icon_3.svg";
import icon_4 from "../images/icon_4.svg";

import "../js/buscador";

import datos from "../datos.json";

export default function Canciones() {
	const icons = [
		{ icon: 1, icono: icon_1 },
		{ icon: 2, icono: icon_2 },
		{ icon: 3, icono: icon_3 },
		{ icon: 4, icono: icon_4 },
	];

	return (
		<div className="container d-flex mx-4">
			<h1>Canciones</h1>
			<input
				type="text"
				className="m-1"
				id="buscador"
				placeholder="buscar..."
				autoFocus
			/>
			<div className="row">
				{datos.canciones.map((cancion, i) => (
					<div className="col-md-4 cancion" key={i}>
						<div className="card">
							<div className="card-header">
								<img
									src={
										icons.filter(function (icon) {
											return icon.icon === cancion.icono;
										})[0].icono
									}
									alt={cancion.nombre}
									className="img-small"
								/>
							</div>
							<div className="card-body text-center">
								<p>{cancion.nombre}</p>
								<audio
									src={`/${cancion.ruta}`}
									controls
									className="w-90 m-1"
								></audio>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

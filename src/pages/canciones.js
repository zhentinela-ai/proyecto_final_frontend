import { icons, canciones } from "../js/statics";

import { FcSearch } from "react-icons/fc";

import "../js/buscador";

import styles from "../css/inputs.module.css";

import datos from "../datos.json";

export default function Canciones() {
	return (
		<div className="container d-flex mx-4">
			<h1>Canciones</h1>
			<div className={styles.container}>
				<FcSearch
					className={styles.icon}
					onClick={function toDashboard() {
						document.getElementById("buscador").focus();
					}}
				/>
				<input
					type="text"
					className={styles.input}
					id="buscador"
					placeholder="buscar..."
					autoFocus
				/>
			</div>
			<div className="row">
				{datos.canciones.map((cancion, i) => (
					<div className="col-lg-4 col-sm col-md-6 cancion" key={i}>
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
									src={canciones[i][`${cancion.ruta}`]}
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

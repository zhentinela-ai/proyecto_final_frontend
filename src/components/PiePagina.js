function PiePagina() {
	return (
		<div style={{
			position: "relative",
			zIndex: -1,
			bottom: "0vh",
			left: "0%",
			width: "100%"
		}}>
			<div className="form-input d-flex justify-content-between px-4 bg-dark align-items-end">
				<h3 className="comparte">Comparte la música</h3>
				<h3>&#169; Derechos Reservados</h3>
			</div>
		</div>
	);
}

export default PiePagina;

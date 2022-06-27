import { VscEyeClosed } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useModal } from "../context/ModalContext";

export default function BotonContacto() {
	const { abrir, abrirModal } = useModal();

	const modalStyles = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		// background: "rgba(0, 0, 0, 0.8)",
		// position: "fixed",
		// top: "0",
		// right: "0",
		// bottom: "0",
		// left: "0",
		// opacity: "0",
		// "pointer-events": "none",
		// transition: "all 1s",
	};

	return (
		<div className="container">
			<div className={abrir === true ? "" : ""}>
				<Modal isOpen={abrir} style={modalStyles}>
					<ModalHeader>
						<div className="form-input justify-content-between">
							<h2>Contacto</h2>
							<NavLink to="#!" onClick={abrirModal}>
								<VscEyeClosed />
							</NavLink>
						</div>
					</ModalHeader>
					<hr />
					<ModalBody>
						<div className="form-group text-center">
							<p>contacto@oye.com</p>
							<p>+57 - 321 - 753 - 7816</p>
						</div>
					</ModalBody>
					<hr />
					<ModalFooter>
						<button
							className="btn btn-primary"
							onClick={abrirModal}
						>
							Cerrar
						</button>
					</ModalFooter>
				</Modal>
			</div>
		</div>
	);
}

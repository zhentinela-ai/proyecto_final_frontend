import { VscEyeClosed } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useModal } from "../context/ModalContext";

export default function BotonContacto() {
	const { abrir, abrirModal } = useModal();

	const modalStyles = {
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		background: "rgba(0, 0, 0, 0.8)",
		position: "fixed",
		width: "100%",
		height: "100%",
		transition: "all 1s",
	};

	return (
		<div className="container">
			<Modal isOpen={abrir} style={modalStyles}>
				<div className="card w-30">
					<div className="card-header">
						<ModalHeader className="w-100">
							<div className="form-input d-flex justify-content-between">
								<h2>Contacto</h2>
								<NavLink to="#!" onClick={abrirModal}>
									<VscEyeClosed className="size-30" />
								</NavLink>
							</div>
						</ModalHeader>
					</div>
					<hr />
					<div className="card-body">
						<ModalBody>
							<div className="form-group text-center">
								<p>contacto@oye.com</p>
								<p>+57 - 321 - 753 - 7816</p>
							</div>
						</ModalBody>
					</div>
					<hr />
					<ModalFooter className="d-flex justify-content-center">
						<button
							className="btn btn-primary p-2 m-3"
							onClick={abrirModal}
						>
							Cerrar
						</button>
					</ModalFooter>
				</div>
			</Modal>
		</div>
	);
}

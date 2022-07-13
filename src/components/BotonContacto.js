import { VscEyeClosed } from "react-icons/vsc";

import { NavLink } from "react-router-dom";

import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import { useModal } from "../context/ModalContext";

export default function BotonContacto() {
	const { abrir, abrirModal, modalStyles } = useModal();

	const styles = {
		fonts: {
			fontSize: "40px",
		},
		button: {
			width: "250px",
			fontSize: "35px",
			height: "50px",
		}
	};

	return (
		<div className="container">
			<Modal isOpen={abrir} style={modalStyles}>
				<div className="card w-30">
					<div className="card-header">
						<ModalHeader className="w-100">
							<div className="form-row d-flex justify-content-around">
								<h2 style={styles.fonts}>Contacto</h2>
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
								<p style={styles.fonts}>contacto@oye.com</p>
								<p style={styles.fonts}>
									+57 - 321 - 753 - 7816
								</p>
							</div>
						</ModalBody>
					</div>
					<hr />
					<ModalFooter className="d-flex justify-content-center">
						<button
							style={styles.button}
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

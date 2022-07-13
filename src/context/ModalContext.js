import { createContext, useContext, useState } from "react";

export const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
	const [abrir, setAbrir] = useState(false);

	const modalStyles = {
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		background: "rgba(0, 0, 0, 0.8)",
		position: "fixed",
		width: "100%",
		height: "100%",
		opacity: 1,
		// transition: "opacity 1s",
		transition: "all 1s",
	};

	const abrirModal = () => {
		setAbrir(!abrir);
	};

	return (
		<ModalContext.Provider value={{ abrir, abrirModal, modalStyles }}>
			{children}
		</ModalContext.Provider>
	);
};

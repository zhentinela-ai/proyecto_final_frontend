import { createContext, useContext, useState } from "react";

export const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
	const [abrir, setAbrir] = useState(false);

	const abrirModal = () => {
		setAbrir(!abrir);
		console.log(abrir);
	};

	return (
		<ModalContext.Provider value={{ abrir, abrirModal }}>
			{children}
		</ModalContext.Provider>
	);
};

import React, {ReactNode} from "react";
import ReactDOM from "react-dom";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    title?: string;
    customClass?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title, customClass }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className={`bg-white p-3 rounded-lg shadow-lg w-1/2 ${customClass || ""}`}>
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
                        <p className="text-black">X</p>
                    </button>
                </div>
                <div className="modal-body">{children}</div>
            </div>
        </div>,
        document.body
    );
};

export default Modal;
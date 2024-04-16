import { ReactNode } from "react";

export type ModalPropsType = {
  children: ReactNode;
  handleClose: () => void;
};
const Modal = ({ children, handleClose }: ModalPropsType) => {
  return (
    <div className="modal">
      <div className="content">
        {children}

        <div className="modal-button">
          <button className="remove-button" onClick={handleClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

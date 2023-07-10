import React from "react";
import { BsXLg } from "react-icons/bs";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: any;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 shadow-lg">
      <div className="flex flex-col w-6/12 bg-white rounded-lg p-6 shadow-lg min-h-1/2 max-h-1/2 overflow-auto">
        <div className="flex place-self-end">
          <button onClick={onClose} className="font-bold text-lg mb-2">
            <BsXLg />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;

import React from "react";
import Cross from "@/assets/images/cross.svg";
const Modal = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={`fixed flex items-center justify-center ${
        isOpen
          ? "visible z-50 opacity-100 no-doc-scroll"
          : "z-[-1] invisible opacity-0"
      } inset-0 bg-gray-900 overflow-y-auto w-full h-full px-2 md:px-4 bg-opacity-60 transition-all duration-1000`}
    >
      <div className="relative shadow-xl rounded-md bg-white  overflow-hidden">
        <div className="flex justify-end p-2 absolute right-1 top-1 z-[2]">
          <button
            onClick={onClose}
            type="button"
            className="text-gray-400 bg-transparent hover:brightness-50 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
          >
            <Cross className="w-5 h-5" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;

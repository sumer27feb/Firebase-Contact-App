import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ onClose, isOpen, children }) => {
  // Get the 'modal-root' element, or create it if it doesn't exist
  const modalRoot =
    document.getElementById("modal-root") ||
    (function () {
      const el = document.createElement("div");
      el.id = "modal-root";
      return document.body.appendChild(el);
    })();

  return createPortal(
    <>
      {isOpen && (
        <>
          <div className="absolute top-0 z-40 grid h-screen w-screen place-items-center backdrop-blur">
            <div className="relative z-50 m-auto min-h-[200px] min-w-[80%] bg-white p-4">
              <div className="flex justify-end">
                <AiOutlineClose
                  onClick={onClose}
                  className="self-end text-2xl"
                />
              </div>
              {children}
            </div>
          </div>
        </>
      )}
    </>,
    modalRoot
  );
};

export default Modal;

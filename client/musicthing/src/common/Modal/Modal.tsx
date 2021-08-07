import useKeypress from "hooks/useKeypress";
import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { FaTimes } from "react-icons/fa";

type ModalHeaderProps = {
  children: ReactNode;
};

export const ModalHeader = ({ children, ...otherProps }: ModalHeaderProps) => {
  return (
    <div className="modal__header" {...otherProps}>
      {children}
    </div>
  );
};

type ModalCloseButtonProps = {
  onClick: () => void;
};

export const ModalCloseButton = ({
  onClick,
  ...otherProps
}: ModalCloseButtonProps) => {
  return (
    <button className="modal__close-btn" {...otherProps} onClick={onClick}>
      <FaTimes />
    </button>
  );
};

type ModalBodyProps = {
  children: ReactNode;
};

export const ModalBody = ({ children, ...otherProps }: ModalBodyProps) => {
  return (
    <div className="modal__body" {...otherProps}>
      {children}
    </div>
  );
};

type ModalFooterProps = {
  children: ReactNode;
};

export const ModalFooter = ({ children, ...otherProps }: ModalFooterProps) => {
  return (
    <div className="modal__footer" {...otherProps}>
      {children}
    </div>
  );
};

type ModalProps = {
  isVisible: boolean;
  onClose: () => void;
  children: ReactNode | ReactNode[];
};

export const Modal = ({
  isVisible,
  onClose,
  children,
  ...otherProps
}: ModalProps) => {
  const escPressed = useKeypress("Escape");
  if (escPressed) {
    onClose();
  }

  return isVisible
    ? createPortal(
        <>
          <div className="modal-backdrop"></div>
          <div className="modal-wrapper">
            <div className="modal" {...otherProps}>
              {children}
            </div>
          </div>
        </>,
        document.getElementById("app") as Element
      )
    : null;
};

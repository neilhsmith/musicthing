import { useAppSelector, useAppDispatch } from "app/hooks";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
} from "common/Modal/Modal";

import { signOutModalOpenSelector, closeSignOutModal } from "./appSlice";
import { logout } from "features/auth/authSlice";

const SignOutModal = () => {
  const dispatch = useAppDispatch();

  const isVisible = useAppSelector(signOutModalOpenSelector);

  return (
    <Modal isVisible={isVisible} onClose={() => dispatch(closeSignOutModal())}>
      <ModalHeader>
        <h1>Sign Out</h1>
        <ModalCloseButton onClick={() => dispatch(closeSignOutModal())} />
      </ModalHeader>
      <ModalBody>
        <p>Are you sure you want to sign out?</p>
      </ModalBody>
      <ModalFooter>
        <button
          className="py-1 px-2 mr-1 bg-secondary"
          onClick={() => dispatch(closeSignOutModal())}
        >
          Cancel
        </button>
        <button
          className="py-1 px-2 bg-danger"
          onClick={() => dispatch(logout)}
        >
          Sign Out
        </button>
      </ModalFooter>
    </Modal>
  );
};

export default SignOutModal;

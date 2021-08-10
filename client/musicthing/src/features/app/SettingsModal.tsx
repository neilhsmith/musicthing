import { useAppSelector, useAppDispatch } from "app/hooks";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
} from "common/Modal/Modal";

import { settingsModalOpenSelector, closeSettingsModal } from "./appSlice";

const SettingsModal = () => {
  const dispatch = useAppDispatch();

  const isVisible = useAppSelector(settingsModalOpenSelector);

  return (
    <Modal isVisible={isVisible} onClose={() => dispatch(closeSettingsModal())}>
      <ModalHeader>
        <h1>Settings</h1>
        <ModalCloseButton onClick={() => dispatch(closeSettingsModal())} />
      </ModalHeader>
      <ModalBody>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
          deleniti veniam fugiat nihil officia animi eos. Beatae reiciendis
          atque aut! Nam, cum accusantium! Quisquam a repellendus esse quaerat
          labore laboriosam.
        </p>
      </ModalBody>
      <ModalFooter>
        <button
          className="py-1 px-2 mr-1 bg-secondary"
          onClick={() => dispatch(closeSettingsModal())}
        >
          Cancel
        </button>
        <button
          className="py-1 px-2 bg-primary"
          onClick={() => console.log("asdf")}
        >
          Save
        </button>
      </ModalFooter>
    </Modal>
  );
};

export default SettingsModal;

import { Modal } from "@fluentui/react";
import { FC } from "react";
import { IFormModel } from "../../pages/insert-form/InsertForm";
import { UseFormSetValue } from "react-hook-form";
import { getBase64 } from "../../utils/ToBase64";

interface IInputFileModalProps {
  isModalOpen: boolean;
  hideModal: () => void;
  setValue: UseFormSetValue<IFormModel>;
}

const InputFileModal: FC<IInputFileModalProps> = (props) => {
  const { isModalOpen, hideModal, setValue } = props
  const handleOnChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      const base64file = await getBase64(file);
      return setValue("image", base64file);
    }
  };
  return (
    <Modal isOpen={isModalOpen} onDismiss={hideModal}>
      <input type="file" onChange={handleOnChange}></input>
    </Modal>
  );
};

export default InputFileModal;

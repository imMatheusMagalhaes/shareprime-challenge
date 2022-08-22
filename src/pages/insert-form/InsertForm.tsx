import { FunctionComponent, useState } from "react";
import { Stack } from "@fluentui/react/lib/Stack";
import { useForm, SubmitHandler } from "react-hook-form";
import { DefaultButton, Label, PrimaryButton } from "@fluentui/react";
import { useBoolean } from "@fluentui/react-hooks";
import InputFileModal from "../../components/input-file-modal/InputFileModal";
import { store } from "../../store/store";
import { addItem } from "../../store/item.store";
import { fileButton, form } from "./insert-form.styles";
import CustomTextField from "../../components/custom-text-field/CustomTextField";
import { useNavigate } from "react-router-dom";
import "./insert-form.css";

export interface IFormModel {
  title: string;
  order: number;
  image: string;
  link: string;
}

const InsertForm: FunctionComponent = () => {
  const [isModalOpen, { setTrue: showModal, setFalse: hideModal }] =
    useBoolean(false);
  const [imageSent, setImageSent] = useState<boolean | undefined>(undefined);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<IFormModel>();
  const handleOnSubmit: SubmitHandler<IFormModel> = (event) => {
    if (getValues().image) {
      store.dispatch(addItem(event));
      setImageSent(true);
      return navigate("/");
    }
    return setImageSent(false);
  };
  return (
    <Stack horizontalAlign="center" verticalAlign="start" id="form-wrapper">
      <Stack
        id="form"
        horizontalAlign="center"
        verticalAlign="center"
        styles={form}
        tokens={{ childrenGap: 15, padding: 50 }}
      >
        <Stack.Item>
          <CustomTextField
            id="title"
            label="Título"
            error={errors.title}
            register={register}
          />
        </Stack.Item>
        <Stack.Item>
          <CustomTextField
            id="link"
            label="Link"
            error={errors.link}
            register={register}
          />
        </Stack.Item>
        <Stack.Item>
          <CustomTextField
            id="order"
            label="Ordem"
            type="number"
            error={errors.order}
            register={register}
          />
        </Stack.Item>
        <Stack.Item>
          <Label>Imagem</Label>
          <DefaultButton
            label="Imagem"
            text={!getValues().image ? "Envie uma imagem!" : "Imagem recebida!"}
            styles={fileButton(getValues().image)}
            onClick={showModal}
          />
          {imageSent === false && (
            <span id="span-error-image">Campo Obrigatório</span>
          )}
        </Stack.Item>
        <Stack.Item>
          <PrimaryButton
            styles={{ root: { width: "100%" } }}
            text="Registrar!"
            onClick={handleSubmit(handleOnSubmit)}
          />
        </Stack.Item>
      </Stack>
      <InputFileModal
        setValue={setValue}
        isModalOpen={isModalOpen}
        hideModal={hideModal}
      />
    </Stack>
  );
};

export default InsertForm;

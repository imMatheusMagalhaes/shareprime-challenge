import { FunctionComponent } from "react";
import { Stack } from "@fluentui/react/lib/Stack";
import { useForm, SubmitHandler } from "react-hook-form";
import { DefaultButton, Label, PrimaryButton } from "@fluentui/react";
import { useBoolean } from "@fluentui/react-hooks";
import InputFileModal from "../../components/input-file-modal/InputFileModal";
import { store } from "../../store/store";
import { addItem } from "../../store/item.store";
import "./insert-form.css";
import { fileButton, form } from "./insert-form.styles";
import CustomTextField from "../../components/custom-text-field/CustomTextField";

export interface IFormModel {
  title: string;
  order: number;
  image: string;
  link: string;
}

const InsertForm: FunctionComponent = () => {
  const [isModalOpen, { setTrue: showModal, setFalse: hideModal }] =
    useBoolean(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    reset,
  } = useForm<IFormModel>();

  const handleOnSubmit: SubmitHandler<IFormModel> = (event) => {
    store.dispatch(addItem(event));
    return reset();
  };

  const readyToShip = (fields: IFormModel) =>
    !fields.image || !fields.link || !fields.order || !fields.title;

  return (
    <Stack horizontalAlign="center" verticalAlign="center" id="form-wrapper">
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
        </Stack.Item>
        <Stack.Item>
          <PrimaryButton
            disabled={readyToShip(getValues())}
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

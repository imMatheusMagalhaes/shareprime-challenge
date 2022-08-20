import { FunctionComponent } from "react";
import { TextField } from "@fluentui/react/lib/TextField";
import { Stack } from "@fluentui/react/lib/Stack";
import { useForm, SubmitHandler } from "react-hook-form";
import { DefaultButton, Label, PrimaryButton } from "@fluentui/react";
import { useBoolean } from "@fluentui/react-hooks";
import InputFileModal from "../../components/input-file-modal/InputFileModal";
import { store } from "../../store/store";
import { addItem } from "../../store/item.store";

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
    reset,
  } = useForm<IFormModel>();

  const handleOnSubmit: SubmitHandler<IFormModel> = (event) => {
    store.dispatch(addItem(event));
    return reset({
      image: undefined,
      link: undefined,
      order: undefined,
      title: undefined,
    });
  };

  return (
    <Stack horizontal>
      <Stack verticalFill>
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <TextField
            id="title"
            label="Título"
            errorMessage={errors.title && "Campo Obrigatório"}
            {...register("title", { required: true })}
          />
          <TextField
            label="Link"
            errorMessage={errors.link && "Campo Obrigatório"}
            {...register("link", { required: true })}
          />
          <TextField
            label="Ordem"
            errorMessage={errors.order && "Campo Obrigatório"}
            {...register("order", { required: true })}
          />
          <Stack>
            <Label>Imagem</Label>
            <DefaultButton
              label="Imagem"
              text="Encontrar imagem"
              onClick={showModal}
            />
            <PrimaryButton text="Registrar!" type="submit" />
          </Stack>
        </form>
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

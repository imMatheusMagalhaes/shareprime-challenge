import { TextField } from "@fluentui/react";
import { FunctionComponent } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import { IFormModel } from "../../pages/insert-form/InsertForm";

interface CustomTextFieldProps {
  id: "link" | "title" | "image" | "order";
  label: string;
  type?: string;
  error: FieldError | undefined;
  register: UseFormRegister<IFormModel>;
}

const CustomTextField: FunctionComponent<CustomTextFieldProps> = (props) => {
  const { error, register, id, label, type } = props;
  return (
    <TextField
      type={type}
      id={id}
      label={label}
      errorMessage={error && "Campo Obrigatório"}
      {...register(id, { required: true })}
    />
  );
};

export default CustomTextField;

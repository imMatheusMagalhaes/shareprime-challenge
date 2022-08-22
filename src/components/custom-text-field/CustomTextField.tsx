import { TextField } from "@fluentui/react";
import { FunctionComponent } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import { IFormModel } from "../../pages/insert-form/InsertForm";

interface CustomTextFieldProps {
  id: "title" | "link" | "order" | "image";
  label: string;
  type?: string;
  error: FieldError | undefined;
  register: UseFormRegister<IFormModel>;
}

const CustomTextField: FunctionComponent<CustomTextFieldProps> = (props) => {
  const { error, register, id, label, type = "text" } = props;
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

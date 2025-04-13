import { useFormik } from "formik";
import * as yup from "yup";

import Button from "../Button/Button";
import Input from "../Input/Input";
import { LoginFormComponent } from "./styles";
import { LoginFormValues } from "./types";

interface LoginFormProps {
  onSubmit: (values: LoginFormValues) => void;
}

function LoginForm(
  { onSubmit }: LoginFormProps
) {
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Field has type email(@ etc.)")
      .required("Field email is required")
      .max(40, "Max 40 symbols")
      .min(12, "Min 12 symbols"),
    password: yup
      .string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Пароль должен содержать min 8 символов (заглавная буква, строчная, цифра, спецсимвол)"
      )
      .required("Field password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    } as LoginFormValues,
    validationSchema,
    validateOnChange: false,
    onSubmit(values){
      onSubmit(values)
    },
  });

  return (
    <LoginFormComponent onSubmit={formik.handleSubmit}>
      <Input
        name="email"
        label="Email *"
        id="email_id"
        placeholder="Enter your email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
      />

      <Input
        name="password"
        label="Password *"
        id="password_id"
        placeholder="Enter your password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />
      <Button name="LOGIN" />
    </LoginFormComponent>
  );
}

export default LoginForm;

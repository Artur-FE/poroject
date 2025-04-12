import { useFormik } from "formik";
import Input from "../../components/Input/Input";
import { LoginFormContainer, LoginFormWrapper, Title } from "./styles";
import * as Yup from "yup";
import Button from "../../components/Button/Button";
import { LoginFormInterface } from "./types";
import { useContext } from "react";
import { UserContext } from "../../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";

function LoginForm() {

    const {userData, getUser, isLoading} = useContext(UserContext);

  const schema = Yup.object().shape({
    login: Yup.string()
      .required("Enter your email. This field is required")
      .email("Field has type email")
      .max(40, "Max 40 symbols")
      .min(12, "Min 12 symbols"),
    password: Yup.string()
      .required("Enter your email. This field is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Пароль должен содержать min 8 символов (заглавная буква, строчная, цифра, спецсимвол)"
      ),
  });

  const navigate = useNavigate();


  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    } as LoginFormInterface,
    validationSchema: schema,
    onSubmit: () => {
        getUser();
        
       // navigate('/user')
        
    },
  });

  return (
    <LoginFormContainer>
      <LoginFormWrapper onSubmit={formik.handleSubmit}>
        <Title>Login Form</Title>
        {isLoading && <Spinner />}
        <Input
          name="login"
          id="login_id"
          placeholder="Enter your email"
          value={formik.values.login}
          onChange={formik.handleChange}
          error={formik.errors.login}
        />
        <Input
          name="password"
          id="password_id"
          type="password"
          placeholder="Enter your password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors.password}
        />
        <Button name="Login" />
    
      </LoginFormWrapper>
    </LoginFormContainer>
  );
}

export default LoginForm;

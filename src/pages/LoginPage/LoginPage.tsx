import { useNavigate } from "react-router-dom";
import { useUser } from "../../UserContext/UserContext";
import { fetchUserData } from "../../api/userApi";
import { useState } from "react";
import Spinner from "../../components/Spinner/Spinner";
import LoginForm from "../../components/LoginForm/LoginForm";
import { LoginPageWrapper } from "./styles";

const LoginPage = () => {
  const { setUser } = useUser();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const loginSubmit = async (values: any) => {
    setLoading(true);
    setApiError("");
    try {
      const userData = await fetchUserData(values);
      setUser(userData);
      navigate("/user");
    } catch (err: any) {
      setApiError("Login failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginPageWrapper  >
      <h1>Login Form</h1>
      <LoginForm onSubmit={loginSubmit}/>
      {loading && <Spinner />}
      {apiError && <p style={{ color: "red" }}>{apiError}</p>}
    </LoginPageWrapper>
  );
};

export default LoginPage;

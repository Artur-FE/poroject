import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Spinner from "../../components/Spinner/Spinner";
import { FormWrapper, ErrorText } from "./styles";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setUser, setIsAuthenticated } = useUser();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("https://randomuser.me/api/");
      if (!res.ok) throw new Error("Ошибка при получении данных пользователя");

      const data = await res.json();
      const user = data.results[0];

      if (!user) throw new Error("Пользователь не найден");

      setUser(user);
      setIsAuthenticated(true);
      navigate("/user-data");
    } catch (err: any) {
      setError(err.message || "ошибка");
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <h2>Login Form</h2>

      <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              type="email"
              required
              minLength={12}
              maxLength={40} name={""}      />

      <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              type="password"
              required name={""}      />

      {loading ? (
        <Spinner />
      ) : (
        <Button name="Login" type="submit" children={undefined} />
      )}

      {error && <ErrorText>{error}</ErrorText>}
    </FormWrapper>
  );
};

export default LoginForm;

import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Wrapper, Title, Info } from "./styles";

const UserData = () => {
  const { user, isAuthenticated } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated || !user) {
      navigate("/");
    }
  }, [isAuthenticated, user, navigate]);

  return (
    <Wrapper>
      <Title>
        {user?.name?.first} {user?.name?.last}
      </Title>
      <Info>Email: {user?.email}</Info>
      <Info>Phone: {user?.phone}</Info>
      <Info>Country: {user?.location?.country}</Info>
      <Info>Username: {user?.login?.username}</Info>
    </Wrapper>
  );
};

export default UserData;

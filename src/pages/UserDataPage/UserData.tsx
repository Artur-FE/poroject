import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../UserContext/UserContext";

const UserDataPage = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/");
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>ID: {user.id}</p>
    </div>
  );
};

export default UserDataPage;

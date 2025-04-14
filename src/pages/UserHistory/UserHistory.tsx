import { useContext } from "react";
import { UserContext } from "../../components/Layout/Layout";
import {
  ButtonDelete,
  Cards,
  HistoryNotFound,
  ListValue,
  ProfileWrapper,
  UserFieldName,
  UserHistoryContainer,
} from "./style";
import { v4 } from "uuid";
import Button from "../../components/Button/Button";

function UserHistory() {
  const { arrayUserData, setArrayUserData } = useContext(UserContext);

  const deleteUser = (email: string) => {
    if (arrayUserData) {
      return arrayUserData.filter((userCard) => userCard.email !== email);
    }
    return [];
  };

  const userCard = arrayUserData?.map((user) => {
    return (
      <Cards>
        <ListValue id={user.email} key={v4()}>
          <UserFieldName>User Name:</UserFieldName> {user.userName}
          <UserFieldName>E-mail:</UserFieldName> {user.email}
        </ListValue>
        <ButtonDelete>
          <Button
            name="Delete Cards"
            danger
            onClick={() => setArrayUserData(deleteUser(user.email))}
          />
        </ButtonDelete>
      </Cards>
    );
  });

  return (
    <UserHistoryContainer>
      <ProfileWrapper>
        {userCard}
        {arrayUserData?.length !== 0 ? (
          <Button
            name="Delete All"
            danger
            onClick={() => setArrayUserData([])}
          />
        ) : (
          <HistoryNotFound>History not found</HistoryNotFound>
        )}
      </ProfileWrapper>
    </UserHistoryContainer>
  );
}

export default UserHistory;

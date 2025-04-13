// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import { User } from './types/userData';
// import { Container, Data, Heading, Info } from './styles';
// import { useUser } from '../../context/UserContext'; // Импортируйте useUser

// function UserData() {
//   const { user } = useUser(); // Получите пользователя из контекста
//   const location = useLocation();
//   const receivedUser = user || (location.state?.user as User) || null; // Оставьте для обработки перезагрузки страницы

//   if (!receivedUser) {
//     return <div>No user data available.</div>;
//   }

//   return (
//     <Container>
//       <Heading>{`${receivedUser.name.title} ${receivedUser.name.first} ${receivedUser.name.last}`}</Heading>
//       <Info>
//         <Data><strong>Email:</strong> {receivedUser.email}</Data>
//         <Data><strong>User ID:</strong> {receivedUser.login.uuid}</Data>
//       </Info>
//     </Container>
//   );
// }

// export default UserData;

import React from 'react';

import {
  UserDataContainer,
  UserDataHeading,
  UserInfoWrapper,
  UserAvatar,
  UserDataField,
} from './styles'; // Import styles
import { useUser } from '../../context/UserContext';

const UserData: React.FC = () => {
  const { user } = useUser();

  if (!user) {
    return <div>No user data available.</div>;
  }

  return (
    <UserDataContainer>
      <UserDataHeading>{`${user.name.title} ${user.name.first} ${user.name.last}`}</UserDataHeading>
      <UserInfoWrapper>
        <UserAvatar src={user.picture.large} alt="User Avatar" />
        <UserDataField>
          <strong>Email:</strong> {user.email}
        </UserDataField>
        <UserDataField>
          <strong>User ID:</strong> {user.login.uuid}
        </UserDataField>
      </UserInfoWrapper>
    </UserDataContainer>
  );
};
import { useContext } from "react";
import { ListValue, PhotoProfile, ProfileWrapper, Title, UserDataContainer, UserDataWrapper, UserFieldName } from "./styles";
import { UserContext } from "../../components/Layout/Layout";

function UserData() {
  const { userData, isLoading } = useContext(UserContext);
  const arrayValueUser = [
    userData?.email, 
    userData?.titleName, 
    userData?.firstName,
      userData?.lastName,
      userData?.gender,
      userData?.picture,
      userData?.country,
      userData?.city,
];

    // const valueUser = arrayValueUser.map((value)=>{
    //         return <ListValue>{value}</ListValue>
    // })
    


  return (
    <UserDataContainer>
    <UserDataWrapper> 
     {isLoading && <Title>Hello, {userData?.userName}!</Title>}
     <PhotoProfile src={userData?.picture} /> 
    <ProfileWrapper>
     <ListValue><UserFieldName>E-mail:</UserFieldName> {userData?.email}</ListValue>
     <ListValue><UserFieldName>First name: </UserFieldName>{userData?.titleName} {userData?.firstName}</ListValue>
     <ListValue><UserFieldName>Last name: </UserFieldName> {userData?.lastName}</ListValue>
     <ListValue><UserFieldName>Gender:</UserFieldName>{userData?.gender}</ListValue>
     <ListValue><UserFieldName>Country:</UserFieldName>{userData?.country}</ListValue>
     <ListValue><UserFieldName>City:</UserFieldName> {userData?.city} </ListValue>
     </ProfileWrapper>

      </UserDataWrapper>
    </UserDataContainer>
  );
}

export default UserData;

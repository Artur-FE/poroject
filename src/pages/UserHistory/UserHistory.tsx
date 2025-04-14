import { useContext } from "react";
import { UserContext } from "../../components/Layout/Layout";
import { ListValue, ProfileWrapper, UserHistoryContainer } from "./style";
import { v4 } from "uuid";
import Button from "../../components/Button/Button";

function UserHistory() {

    const { arrayUserData, setArrayUserData } = useContext(UserContext);
    
    const deleteUser = (email: string) => {
        if (arrayUserData) {
            return arrayUserData.filter(userCard => userCard.email !== email);
          }
          return [];

    }

    console.log();
    

    //setArrayUserData(deleteUser())
    
    // = setArrayUserData(arrayUserData?.filter(userCard =>  userCard.email !== {email}));

    const userCard = arrayUserData?.map((user)=> {
       return( <>
       <ListValue id={user.email} key={v4()}> {user.userName} {user.email} </ListValue>
       <Button name={user.email} danger onClick={() => {}}/>
       {/* <Button name={user.email} danger onClick={() => setArrayUserData(deleteUser(user.email))}/> */}
       </>
       
    )
    });


    return (
        <UserHistoryContainer>
            <ProfileWrapper>
        {userCard}
        <Button name="Delete All" danger onClick={()=>setArrayUserData([])}/>
        </ProfileWrapper>
        </UserHistoryContainer>
    )

}

export default UserHistory;
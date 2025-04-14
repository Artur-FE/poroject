import styled from "@emotion/styled";

export const UserHistoryContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
flex: 1;
gap: 30px;
padding: 20px;
`;

export const UserDataWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
flex: 1;
width: 600px;
border: 1px solid #c3bfbf;
border-radius: 10px;
box-shadow: 5px 5px 5px #c3bfbf;
gap: 10px;
padding: 20px;
`;

export const Cards = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding-left: 10px;
padding-right: 2px;
border: 1px solid #b8b8b8;
border-radius: 7px;
box-shadow: 5px 5px 5px #b8b8b8;
`;

export const ProfileWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
flex: 1;
width: 450px;
gap: 10px;
`;

export const Title = styled.div`
font-size: 28px;
font-style: italic;
`;

export const PhotoProfile = styled.img`
width: 128px;
border-radius: 50%;
`;

export const ListValue = styled.div`
display: flex;
flex-direction: column;
gap: 7px;
font-size: 18px;
`;

export const UserFieldName = styled.div`
font-size: 18px;
font-weight: bold;
`;

export const HistoryNotFound = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-size: 18px;
color: red;
font-weight: bold;
`;

export const ButtonDelete = styled.div`
width: 150px;
align-items: end;
justify-content: end;
`;
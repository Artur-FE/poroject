import styled from "@emotion/styled";

export const UserDataContainer = styled.div`
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

export const ProfileWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
flex: 1;
width: 300px;
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
gap: 7px;
font-size: 18px;
`;

export const UserFieldName = styled.div`
font-size: 18px;
font-weight: bold;
`;
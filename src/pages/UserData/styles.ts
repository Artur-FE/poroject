// import styled from "@emotion/styled/macro"

//     export const Container = styled.div`
//       display: 'flex';
//       flex-direction: 'column';
//       align-items: 'center';
//       padding: '20px';
//       border: '1px solid #ccc';
//       border-radius: '5px';
//       max-width: '400px';
//       margin: '20px auto';
//      `;
//     export const Heading = styled.h2` 
//       margin-bottom: '20px';
//       font-size: '24px';
//       text-align: 'center';
//    `;
//     export const Info = styled.div`
//       display: 'flex';
//       flex-direction: 'column';
//       align-items: 'center';
//       width: '100%';
//    `;
 
//    export const Data = styled.div`
//       margin-bottom: '10px';
//       font-size: '16px';
//    `;
  
import styled from '@emotion/styled';

export const UserDataContainer = styled.div`
  padding: 20px;
  text-align: center;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

export const UserDataHeading = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const UserAvatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 15px;
`;

export const UserDataField = styled.p`
  margin-bottom: 10px;
  font-size: 16px;
`;